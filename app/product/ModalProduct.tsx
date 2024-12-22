import React, { useState } from 'react';
import { Modal, Button, Form, Input, InputNumber, Divider, Row, Col } from 'antd';

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
        <Divider orientation="left">Horizontal</Divider>
        <Row justify='center'>
        <Col xs={{ span: 11, offset: 1 }} sm={4} md={6} lg={{ span: 6,pull:1}} xl={10}>
        <Form.Item
              name="name"
              label="Product Name"
              rules={[{ required: true, message: 'Please input the product name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} sm={4} md={6} lg={{ span: 6,offset:1 }} xl={10}>
          <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please input the product description!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={{ span: 11, offset: 1 }} sm={4} md={6} lg={{ span: 6, pull: 1 }} xl={10}>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the product price!' }]}
          >
            <Input />
          </Form.Item>
          </Col>
          
          <Col xs={{ span: 11, offset: 1 }} sm={4} md={6} lg={{ span: 6, offset: 1 }} xl={10}>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please input the product quantity!' }]}
          >
            <Input />
          </Form.Item>
          </Col>

        </Row>
      </Form>
    </Modal>
  );
};

export default ModalProduct;