import { Modal, Form, Table, Input, Button, message } from "antd";
import { useState } from "react";

const Edit = ({
  setIsEditModalOpen,
  isEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState({});
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-Product", {
        method: "PUT",
        body: JSON.stringify({ ...values, ProductId: editingRow._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product name updated succesfully");
      setCategories(
        categories.map((item) => {
          if (item._id === editingRow._id) {
            return { ...item, title: values.title };
          }
          return item;
        })
      );
    } catch (error) {
      message.error("Something is wrong");
      console.log(error);
    }
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure ?")) {
      try {
        fetch("http://localhost:5000/api/categories/delete-Product", {
          method: "DELETE",
          body: JSON.stringify({ ProductId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Product deleted successfully");
        setCategories(categories.filter((item)=> item._id !== id));
      } catch (error) {
        message.error("Something is wrong");
      }
    }
  };
  const columns = [
    {
      title: "Product Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0" name="title">
              <Input defaultValue={record.title} />
            </Form.Item>
          );
        } else {
          return <p>{record.title}</p>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="link"
              onClick={() => setEditingRow(record)}
              className="pl-0"
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit" className="!text-gray-500">
              Save
            </Button>
            <Button
              type="link"
              danger
              onClick={() => deleteProduct(record._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
      <Form onFinish={onFinish}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
  );
};

export default Edit;