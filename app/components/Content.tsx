import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

export const AppContent: React.FC = () => {
  return (
    <Content className="m-4">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-6 bg-white shadow-md rounded-md">
        Bill is a cat.
      </div>
    </Content>
  );
};
