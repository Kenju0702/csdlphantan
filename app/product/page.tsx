'use client';

import React, { useEffect, useState } from 'react';
import { HeaderPage } from '../components/HeaderAll';
import CustomTable from '../components/TableComponent';
import { getProvider } from '../api/productApi';
import ActionMenu from '../components/actionMenu';
import ModalProduct from './ModalProduct';
import './page.css';
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
    <div className="p-2">
      <HeaderPage title="Product" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <div style={{ width: '80%', height: '100%', overflow: 'auto' }}>
          <CustomTable columns={columns} data={products} />
        </div>
      </div>
      {isModalVisible && <ModalProduct visible={isModalVisible} onClose={() => setIsModalVisible(false)} />}

    </div>
  );
}
