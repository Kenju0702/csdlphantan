import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export const AppFooter: React.FC = () => {
  return (
    <Footer className="text-center bg-gray-50">
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};
