import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, FileTextOutlined, GiftOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

type SidebarProps = {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        onCollapse(true);
      } else {
        onCollapse(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onCollapse]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className="bg-gray-900"
      trigger={
        <span className="flex items-center justify-center cursor-pointer w-full text-2xl mt-2">
          {collapsed ? '⬅️' : '➡️'}
        </span>
      }
    >
      <div className="logo h-12 flex items-center justify-center text-white text-lg font-bold">
        Logo
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Employee
        </Menu.Item>
        <SubMenu key="sub1" title={<span>Product</span>} icon={<GiftOutlined />}>
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span>Order</span>} icon={<FileTextOutlined />}>
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <span>File</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};