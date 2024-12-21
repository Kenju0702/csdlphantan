import React from 'react';
import { Table } from 'antd';

const CustomTable = ({ columns, data }) => {
  const tableContainerStyle = {
    overflowX: 'auto', // Cuộn ngang nếu bảng quá lớn
    fontSize: '14px', // Kích thước chữ mặc định
    whiteSpace: 'nowrap', // Tránh xuống dòng
  };

  const responsiveStyle = {
    fontSize: '10px', // Kích thước chữ nhỏ hơn trên màn hình nhỏ
  };

  return (
    <div style={tableContainerStyle}>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.key || record.id}
        pagination={{ pageSize: 10, responsive: true }}
        scroll={{ x: 'max-content' }} // Cho phép cuộn ngang khi cần
        style={responsiveStyle}
      />
    </div>
  );
};

export default CustomTable;
