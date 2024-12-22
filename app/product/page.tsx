'use client';

import React, { useEffect, useState } from 'react';
import { HeaderPage } from '../components/HeaderAll';
import CustomTable from '../components/TableComponent';
import { getProvider } from '../api/productApi';
import ActionMenu from '../components/actionMenu';
import ModalProduct from './ModalProduct';
import './page.css';
import SearchComponent from '../components/SearchComponent';
import { PlusOutlined } from '@ant-design/icons'; // Import the icon from Ant Design
import { Button, Col, Row } from 'antd';
import BreadcrumbComponent from '../components/BreadCrumComponent';

interface Product {
  id: string;
  name: string;
  hello: string;
  number: number;
  invoices: boolean;
  key?: string;
}

export default function ProductPage() {

  const [products, setProducts] = useState<Product[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = () => {
    console.log('Edit action');
    setIsModalVisible(true);
  };

  const handleDelete = (id: number) => {
    console.log('Delete action', id);
  };

  const handleViewDetails = (id: number) => {
    console.log('View Details action', id);
  };

  const actionMenuItems = [
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Hello',
      dataIndex: 'hello',
      key: 'hello',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
      sorter: (a: Product, b: Product) => a.number - b.number,
    },
    {
      title: 'Invoices',
      dataIndex: 'invoices',
      key: 'invoices',
      render: (value: boolean) => (value ? 'Yes' : 'No'),
    },
    {
      title: 'action',
      dataIndex: 'action',
      key: 'action',
      render: (text: any, record: any) => (
        <ActionMenu
          rowId={record.id}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onViewDetails={handleViewDetails}
        />
      ),
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProvider();
        if (Array.isArray(response)) {
          const productsWithKey = response.map((product: Product) => ({
            ...product,
            key: product.id,
          }));
          setProducts(productsWithKey);
        } else {
          console.error('Dữ liệu trả về không phải là mảng');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ overflowY: 'auto', height: '100%', maxHeight: '100vh', overflowX: 'hidden' }}>

      <Row gutter={[18, 18]} justify="center" align="stretch" style={{ padding: '30px' }}>
        {/* Header and Search */}

        <Col xs={24} lg={20}>
          <Row justify="space-between" align="middle">
            <BreadcrumbComponent
              items={[
                { title: 'Home' },
                { title: <a href="">Application Center</a> },
                { title: <a href="">Application List</a> },
                { title: 'An Application' },
              ]}
            />
          </Row>

        </Col>

        {/* Add Button */}
        <Col xs={24} lg={20} style={{ textAlign: 'right' }}>
          <Row justify={'space-between'}>
            <Col>
              <HeaderPage title="Product" />
            </Col>
            <Col>
              <Row justify="end">
                <Col pull={1}>
                  <SearchComponent width={200} />
                </Col>
                <Col>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setIsModalVisible(true)}
                    style={{
                      backgroundColor: '#4CAF50',
                      borderColor: '#4CAF50',
                      borderRadius: '10px',
                      height: '40px',
                      fontSize: '16px',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
                  >
                    Add
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        {/* Data Table */}
        <Col xs={24} lg={20}>
          <CustomTable columns={columns} data={products} />
          {isModalVisible && (
            <ModalProduct
              visible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
