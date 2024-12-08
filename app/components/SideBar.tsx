import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

type SidebarProps = {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="bg-gray-900">
      <div className="logo h-12 flex items-center justify-center text-white text-lg font-bold">
        Logo
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <span>Option 2</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><span>User</span></span>}>
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><span>Team</span></span>}>
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
