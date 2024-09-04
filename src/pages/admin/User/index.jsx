import { useState } from 'react';
import {useAddUserMutation, useGetAllUsersQuery} from '../../../redux/api/admin/user/index.js' 

export function UserMain() {

  const {data, isLoading, isError, error} = useGetAllUsersQuery();
  const [picture, setPicture] = useState(null);
  const [AddUser] = useAddUserMutation();

  const handleChange = (e) => {
    setPicture(e.target.files[0]);
  }

  console.log(picture)

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture', picture);
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    formData.append('username', e.target.username.value);
    formData.append('surname', e.target.surname.value);
    formData.append('name', e.target.name.value);
    formData.append('age', e.target.age.value);
    console.log(formData)
    AddUser(formData);
  }

  return (
    <div className="user-main">
      
      {
        isLoading ? <h1>Loading...</h1> : 
        <>

          <form onSubmit={handleAdd}>
              <input type="text" placeholder='Email' name='email'/>
              <input type="text" placeholder='Password' name='password'/>
              <input type="text" placeholder='username' name='username'/>
              <input type="text" placeholder='surname' name='surname'/>
              <input type="text" placeholder='name' name='name'/>
              <input type="number" placeholder='age' name='age'/>
              <input type="file" name="picture" id="picture" onChange={handleChange}/>
              <button className='submit'>
                submit
              </button>
          </form>
        </>

      }
    </div>
  );
}

