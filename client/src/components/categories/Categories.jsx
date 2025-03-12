import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Form, Input, Modal, Button, message } from "antd";
const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi.");
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      <li className="category-item">
        <span>All</span>
      </li>
      <li className="category-item">
        <span>Foods</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <Modal
        title="Add new category"
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
        open={isAddModalOpen}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Add category"
            rules={[{ required: true, message: "Category is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
