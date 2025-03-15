import {Form, Table, Button, message } from "antd";
import { useEffect,useState } from "react";

const Edit = ({
  setIsEditModalOpen,
  isEditModalOpen,
  categories,
  setCategories,
}) => {
  const [products, setProducts] = useState([]);
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

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-Product", {
        method: "PUT",
        body: JSON.stringify({ ...values, }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product name updated succesfully");
      setCategories(
        categories.map((item) => {
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
      width:"8%",
      render: (_, record) => {
          return <p>{record.title}</p>;
      },
    },
    {
      title: "Product Image",
      dataIndex: "img",
      width:"2%",
      render: (_, record) => {
        return <img src={record.img} alt="" className=" h-20 object-cover" />
    },
    },
    {
      title: "Product Price",
      dataIndex: "price",
      width:"8%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width:"8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width:"8%",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="link"
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
          dataSource={products}
          columns={columns}
          rowKey={"_id"}
          scroll={{
            x:1000,
            y:600,
          }}
        />
      </Form>
  );
};

export default Edit;