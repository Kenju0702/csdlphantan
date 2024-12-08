import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export const AppHeader: React.FC = () => {
  return (
    <Header className="bg-white p-4 shadow-md flex items-center">
      Header Content
    </Header>
  );
};
