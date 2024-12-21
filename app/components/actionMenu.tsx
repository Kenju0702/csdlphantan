import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined, MoreOutlined } from '@ant-design/icons';

interface ActionMenuProps {
  rowId: number;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onViewDetails?: (id: number) => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ rowId, onEdit, onDelete, onViewDetails }) => {
  const menu = (
    <Menu>
      <Menu.Item key="edit" onClick={() => onEdit?.(rowId)}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => onDelete?.(rowId)}>
        Delete
      </Menu.Item>
      <Menu.Item key="viewDetails" onClick={() => onViewDetails?.(rowId)}>
        View Details
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
};

export default ActionMenu;