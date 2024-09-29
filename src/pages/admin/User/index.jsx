import { useState, useRef, useEffect, useMemo } from 'react';
import { useAddUserMutation, useBlockUserMutation, useDeleteUserMutation, useGetAllUsersQuery, useUnblockUserMutation, useUpdateUserMutation } from '../../../redux/api/admin/user/index.js';
import { message } from 'antd';
import { Loader } from '../../../components/admin/Layout/Animation/Loading.jsx';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdBlock, MdCheckCircle } from 'react-icons/md';
import { EditForm } from './Forms/EditForm.jsx';
import { AddForm } from './Forms/AddForm.jsx';

export function UserMain() {
  const { data, isLoading, isError, error } = useGetAllUsersQuery();
  const [DeleteUser, {isLoading: DisLoading, isSuccess: DisSuccess, isError: DisError}] = useDeleteUserMutation();
  const [Block, {isLoading: BisLoading, isSuccess: BisSuccess, isError: BisError}] = useBlockUserMutation();
  const [Ublock, {isLoading: UisLoading, isSuccess: UisSuccess, isError: UisError}] = useUnblockUserMutation();
  const [AddUser, {isLoading: AisLoading, isSuccess: AisSuccess, isError: AisError}] = useAddUserMutation();
  const [EditUser, {isLoading: EisLoading, isSuccess: EisSuccess, isError: EisError}] = useUpdateUserMutation();
  const [picture, setPicture] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const formRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture', picture);
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    formData.append('username', e.target.username.value);
    formData.append('surname', e.target.surname.value);
    formData.append('name', e.target.name.value);
    formData.append('age', e.target.age.value);
    formData.append('role', 'admin');

    await AddUser(formData);
    setIsFormOpen(false);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsEditFormOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture', picture ? picture : currentUser.picture);
    formData.append('email', e.target.email.value ? e.target.email.value : currentUser.email);
    formData.append('username', e.target.username.value ?  e.target.username.value : currentUser.username);
    formData.append('surname', e.target.surname.value ?  e.target.surname.value : currentUser.surname);
    formData.append('name', e.target.name.value ? e.target.name.value : currentUser.name);
    formData.append('age', e.target.age.value ? e.target.age.value : currentUser.age);

    EditUser({userId: currentUser.id, updatedData: formData});
  };

  const toggleBlock = (user) => {
    if (user.isBlocked) {
      Ublock(user.id);
    } else {
      Block(user.id);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setIsFormOpen(false);
        setIsEditFormOpen(false);
      }
    };

    if (isFormOpen || isEditFormOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormOpen, isEditFormOpen]);

  useEffect(() => {
    if (DisSuccess) {
      message.success('User deleted successfully');
    }
    if (UisSuccess) {
      setIsEditFormOpen(false);
      message.success('User unblocked successfully');
    }
    if (BisSuccess) {
      message.success('User blocked successfully');
    }
    if (AisSuccess) {
      setIsFormOpen(false);
      message.success('User added successfully');
    }
    if (EisSuccess) {
      message.success('User updated successfully');
    }
  }, [DisSuccess, UisSuccess, BisSuccess, AisSuccess, EisSuccess]);

  useEffect(() => {
    if (DisError) {
      message.error('Failed to delete user');
    }
    if (UisError) {
      message.error('Failed to unblock user');
    }
    if (BisError) {
      message.error('Failed to block user');
    }
    if (AisError) {
      message.error('Failed to add user');
    }
    if (EisError) {
      message.error('Failed to update user');
    }
    if (isError) {
      message.error('Failed to fetch users');
    }
  }, [DisError, UisError, BisError, AisError, EisError, isError]);

  const filteredUsers = useMemo(() => {
    if (!data || !data.users) return [];
    return data.users.filter((user) => {
      const userValues = [user.email, user.username, user.surname, user.name, user.age]
        .join(' ')
        .toLowerCase();
      return userValues.includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm]);

  return (
    <div className="user-main p-6">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition duration-300"
          >
            {isFormOpen ? 'Close Form' : 'Add New User'}
          </button>

          {/* Search Input Field */}
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />

          {isEditFormOpen && currentUser && (
            <EditForm
              handleUpdate={handleUpdate}
              currentUser={currentUser}
              handleChange={handleChange}
              picture={picture}
              setPicture={setPicture}
              EisLoading={EisLoading}
              formRef={formRef}
            />
          )}

          {isFormOpen && (
            <AddForm
              handleAdd={handleAdd}
              handleChange={handleChange}
              picture={picture}
              setPicture={setPicture}
              AisLoading={AisLoading}
              formRef={formRef}
            />
          )}

          <table
            className={`transition duration-300 w-full bg-white shadow-md rounded-md table-auto ${
              BisLoading || UisLoading || DisLoading ? 'opacity-35' : ''
            }`}
          >
            <thead>
              <tr>
                <th className="p-4 border-b text-left">Picture</th>
                <th className="p-4 border-b text-left">Email</th>
                <th className="p-4 border-b text-left">Username</th>
                <th className="p-4 border-b text-left">Surname</th>
                <th className="p-4 border-b text-left">Name</th>
                <th className="p-4 border-b text-left">Age</th>
                <th className="p-4 border-b text-left">Role</th>
                <th className="p-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="p-4 border-b text-center">
                    {user.thumbnail && (
                      <img
                        src={user.thumbnail}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                  </td>
                  <td className="p-4 border-b">{user.email}</td>
                  <td className="p-4 border-b">{user.username}</td>
                  <td className="p-4 border-b">{user.surname}</td>
                  <td className="p-4 border-b">{user.name}</td>
                  <td className="p-4 border-b text-center">{user.age}</td>
                  <td className="p-4 border-b">{user.role}</td>
                  <td className="p-6 text-center flex justify-center space-x-2 items-center gap-[10px] my-auto">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
                    >
                      <FaEdit className="text-lg" />
                    </button>
                    <button
                      onClick={() => DeleteUser(user._id)}
                      className="text-red-500 hover:text-red-700 transition duration-300 flex items-center"
                    >
                      {DisLoading ? <Loader /> : <FaTrashAlt className="text-lg" />}
                    </button>
                    <button
                      onClick={() => toggleBlock(user)}
                      className={`text-${
                        user.isBlocked ? 'green' : 'red'
                      }-500 hover:text-${
                        user.isBlocked ? 'green' : 'red'
                      }-700 transition duration-300 flex items-center`}
                    >
                      {user.isBlocked ? (
                        <MdCheckCircle className="text-lg" />
                      ) : (
                        <MdBlock className="text-lg" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
