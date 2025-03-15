import { Table, Button, message, Select, Modal, Input, Form } from "antd";
import { useEffect, useState } from "react";

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product name updated succesfully");
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          }
          return item;
        })
      );
    } catch (error) {
      message.error("Something is wrong.");
      console.log(error);
    }
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure ?")) {
      try {
        fetch("http://localhost:5000/api/products/delete-product", {
          method: "DELETE",
          body: JSON.stringify({ productId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Product deleted successfully");
        setProducts(products.filter((item) => item._id !== id));
      } catch (error) {
        message.error("Something is wrong");
      }
    }
  };
  const columns = [
    {
      title: "Product Title",
      dataIndex: "title",
      width: "8%",
      render: (_, record) => {
        return <p>{record.title}</p>;
      },
    },
    {
      title: "Product image",
      dataIndex: "img",
      width: "4%",
      render: (_, record) => {
        return (
          <img src={record.img} alt="" className="w-full h-20 object-cover" />
        );
      },
    },
    {
      title: "Product Price",
      dataIndex: "price",
      width: "8%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="link"
              className="pl-0"
              onClick={() => {
                setIsEditModalOpen(true);
                setEditingItem(record);
              }}
            >
              Edit
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
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
      <Modal
        title="Add New Product"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
          <Form.Item
            name="title"
            label="Name of Product"
            rules={[
              {
                required: true,
                message: "Product Name field cannot be left empty!",
              },
            ]}
          >
            <Input placeholder="Please enter the product name." />
          </Form.Item>
          <Form.Item
            name="img"
            label="Image of Product"
            rules={[
              {
                required: true,
                message: "Product Image field cannot be left empty!",
              },
            ]}
          >
            <Input placeholder="Please upload the product image." />
          </Form.Item>
          <Form.Item
            name="price"
            label="Product price"
            rules={[
              { required: true, message: "Product price field is mandatory!" },
            ]}
          >
            <Input placeholder="Please enter the product price." />
          </Form.Item>
          <Form.Item
            name="category"
            label="Choose category"
            rules={[{ required: true, message: "" }]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "Category field cannot be left empty!")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
