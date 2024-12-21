import React, { useState } from 'react';
import { Modal, Button, Form, Input, InputNumber } from 'antd';

interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface ModalProductProps {
  visible: boolean;
  onClose: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({ visible, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handleOk = (): void => {
    form
      .validateFields()
      .then((values) => {
        setLoading(true);
        console.log('Product Data:', values);

        setTimeout(() => {
          setLoading(false);
          onClose();
          form.resetFields();
        }, 3000);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      visible={visible}
      title="Insert Product"
      onOk={handleOk}
      onCancel={onClose}
      confirmLoading={loading}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        name="product_form"
        initialValues={{
          name: '',
          description: '',
          price: 0,
          quantity: 1,
        }}
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: 'Please input the product name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input the product description!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please input the product price!' }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: 'Please input the product quantity!' }]}
        >
          <InputNumber min={1} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalProduct;