import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import logo from '../../public/favicon.ico'; // Replace with the path to your logo image

const { Header } = Layout;

export const AppHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="settings">
        <a href="/settings">Settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <a href="/logout">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="bg-white p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <span className="font-bold text-xl">Admin Panel</span>
      </div>
      <div className="flex items-center justify-center space-x-5">
        {/* User Avatar with Dropdown */}
        <Dropdown overlay={menu} visible={visible} onVisibleChange={handleMenuClick}>
          <Avatar size="large" icon={<UserOutlined />} className="bg-gray-200 cursor-pointer" />
        </Dropdown>
      </div>
    </Header>
  );
};
