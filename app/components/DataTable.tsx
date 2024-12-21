import { Table } from 'antd';
import notDataIcon from '../../public/favicon.ico';

interface DataTableProps {
  pagination?: boolean;
  isScroll?: boolean;
  rows?: any[]; // Chú ý: Kiểu `any[]` này có thể không an toàn. Bạn cần xác định kiểu dữ liệu chính xác hơn cho `rows`.
  columns: any[]; // Tương tự như trên, xác định kiểu dữ liệu của columns.
  page?: number;
  limit?: number;
  total?: number;
  onPageChange?: (page: number, pageSize: number) => void;
  rowSelection?: any; // Cần xác định kiểu `rowSelection` cụ thể hơn.
  title?: React.ReactNode;
  loading?: boolean;
  showExpand?: boolean;
  expandColumns?: any[];
  expandDataSource?: any[];
}

const DataTable: React.FC<DataTableProps> = ({
  pagination,
  isScroll,
  rows = [],
  columns,
  page,
  limit,
  total,
  onPageChange,
  rowSelection,
  title,
  loading,
  showExpand,
  expandColumns,
  expandDataSource,
}) => {
  const expandedRowRender = () => (
    <Table
      columns={expandColumns}
      dataSource={expandDataSource}
      pagination={false}
    />
  );

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns.map((col) => ({ ...col, width: col.width || 150 }))}
      title={() => title}
      dataSource={Array.isArray(rows) ? rows.map((row, index) => ({ ...row, key: row.id || index })) : []}
      rowKey={(record) => record.id || record.key}
      pagination={
        pagination && {
          current: page,
          pageSize: limit,
          total,
          onChange: onPageChange,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
          showTotal: (total) => `Tổng ${total} mục`,
        }
      }
      scroll={isScroll && { y: 470, x: 800 }}
      style={{ height: '100%' }}
      loading={loading}
      expandable={
        showExpand && {
          expandedRowRender,
          expandIconColumnIndex: 1,
        }
      }
      locale={{
        emptyText: (
          <div style={{ textAlign: 'center', padding: '20px', minWidth: '100%', overflow: 'hidden' }}>
            <img
              src={notDataIcon}
              alt="No Data"
              style={{ marginBottom: '10px', maxWidth: '100%', objectFit: 'cover' }}
            />
            <p>Không có dữ liệu để hiển thị</p>
          </div>
        ),
      }}
    />
  );
};

export default DataTable;
