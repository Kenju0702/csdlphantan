'use client';

import React from 'react';
import { Table, Dropdown, Menu, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Icon, { LogoutOutlined, MoreOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a className='text-black'>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    render: (text: string) => <a className='text-black'>{text}</a>,

  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (address: string) => (
      <span style={{ color: 'black' }}>{address}</span>
    ),
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record: DataType) => (
      <Dropdown overlay={menu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center',color:'black' }}>
          <MoreOutlined className="ml-6" />
        </a>
      </Dropdown>
    ),
  },
];

const menu = (
  <Menu>
    <Menu.Item key="profile">
      <a href="/profile">add</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="settings">
      <a href="/settings">delete</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout" icon={<LogoutOutlined />}>
      <a href="/logout">edit</a>
    </Menu.Item>
  </Menu>
);

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Alice Johnson',
    age: 28,
    address: 'San Francisco No. 4 Lake Park',
    tags: ['engineer', 'creative'],
  },
  {
    key: '5',
    name: 'Michael Smith',
    age: 36,
    address: 'Boston No. 5 Lake Park',
    tags: ['athlete', 'musician'],
  },
  {
    key: '6',
    name: 'Emily Davis',
    age: 24,
    address: 'Los Angeles No. 6 Lake Park',
    tags: ['scientist', 'researcher'],
  },
  {
    key: '7',
    name: 'Sophia Turner',
    age: 29,
    address: 'Miami No. 7 Lake Park',
    tags: ['photographer', 'artist'],
  },
  {
    key: '8',
    name: 'Liam Cooper',
    age: 40,
    address: 'Chicago No. 8 Lake Park',
    tags: ['developer', 'gamer'],
  },
  {
    key: '9',
    name: 'Olivia Martinez',
    age: 33,
    address: 'Seattle No. 9 Lake Park',
    tags: ['teacher', 'mentor'],
  },
  {
    key: '10',
    name: 'James Wilson',
    age: 37,
    address: 'Houston No. 10 Lake Park',
    tags: ['scientist', 'researcher'],
  },
];

const MyTable = () => {
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default MyTable;
