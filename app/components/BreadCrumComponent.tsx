// BreadcrumbComponent.tsx
import React from 'react';
import { Breadcrumb } from 'antd';

interface BreadcrumbItem {
  title: string | React.ReactNode;
  href?: string;
}

interface BreadcrumbComponentProps {
  items: BreadcrumbItem[];
}

const BreadcrumbComponent: React.FC<BreadcrumbComponentProps> = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.href ? <a href={item.href}>{item.title}</a> : item.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
