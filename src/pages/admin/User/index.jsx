import React, { useState } from 'react';
import { Table, Button, Input, Popconfirm, message, Switch } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, EditOutlined, DeleteOutlined, StopOutlined, CheckOutlined } from '@ant-design/icons';
import './userMain.css';

export function UserMain() {
  const [users, setUsers] = useState([
    {
      _id: "66d5a83dec0fd5d010532a42",
      id: "d3f8a108-14df-41ba-b020-792410e966dd",
      name: "Ibrahim",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Antu_im-invisible.svg/1200px-Antu_im-invisible.svg.png",
      surname: "Muradov",
      username: "Ibrahim",
      age: 19,
      email: "brhmmuradov@gmail.com",
      password: "Ibrahim2005@",
      role: "user",
      blockDuration: 0,
      isBlocked: false,
      isVerified: false,
      isAdmin: true,
      isDeleted: false,
      isSubscribed: false,
      subscription: null,
      watchList: [],
      Comments: [],
      LikedMovies: [],
      LikedComments: [],
      createdAt: "2024-09-02T11:57:49.889+00:00",
      updatedAt: "2024-09-02T11:57:49.889+00:00"
    }
  ]);

  const [showPassword, setShowPassword] = useState(false);

  const handleEdit = (id) => {
    message.info(`Edit user ${id}`);
  };

  const handleDelete = (id) => {
    message.info(`Deleted user ${id}`);
  };

  const handleBan = (id) => {
    message.info(`User ${id} banned`);
  };

  const columns = [
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (text) => <img src={text} alt="Thumbnail" style={{ width: 50, height: 50, borderRadius: '50%' }} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
      render: (text) => (
        <div className="password-field">
          <Input
            type={showPassword ? 'text' : 'password'}
            value={text}
            readOnly
          />
          <Button
            icon={showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="actions">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.id)}
            style={{ marginRight: 8 }}
          />
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              style={{ marginRight: 8 }}
            />
          </Popconfirm>
          <Switch
            checked={record.isBlocked}
            onChange={() => handleBan(record.id)}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<StopOutlined />}
          />
        </div>
      )
    }
  ];

  return (
    <div className="user-main">
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
