import React, { useState } from 'react';
import { Table } from 'antd';

interface TableProps {
  columns: any[];
  data: any[];
}

const CustomTable: React.FC<TableProps> = ({ columns, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[], selectedRows: any[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      console.log(`selectedRowKeys: ${newSelectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      scroll={{ x: 'max-content', y: 500 }} // Adjust the height as needed
      pagination={{
        pageSize: 8, // Set the number of items per page
        showSizeChanger: true, // Enable the size changer
        position: ['bottomRight'], // Correct position type
      }}
    />
  );
};

export default CustomTable;
