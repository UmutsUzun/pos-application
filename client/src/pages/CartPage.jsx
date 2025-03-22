import { useState } from "react";
import Header from "../components/header/Header.jsx";
import { Button, Card, message, Popconfirm, Table } from "antd";
import CreateBill from "../components/cartTotals/CreateBill.jsx";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { deleteCart, increase, decrease } from "../redux/cartSlice.js";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Product Image",
      dataIndex: "img",
      key: "img",
      width: "130px",
      render: (text) => {
        return <img src={text} alt="" className="w-full h-20 object-cover" />;
      },
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <span>£{text.toFixed(2)}</span>;
      },
    },
    {
      title: "Product Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return (
          <div className="flex items-center justify-center gap-2">
            <Button
              type="primary"
              size="small"
              className="!rounded-full flex items-center justify-center"
              icon={<PlusCircleOutlined />}
              onClick={() => dispatch(increase(record))}
            />

            <span className="font-bold w-6 text-center inline-block">
              {record.quantity}
            </span>

            <Button
              type="primary"
              size="small"
              className="!rounded-full flex items-center justify-center"
              icon={<MinusCircleOutlined />}
              onClick={() => {
                if (record.quantity === 1) {
                  if (window.confirm("Delete the product?")) {
                    dispatch(decrease(record));
                    message.success("Product deleted from basket successfully");
                  }
                } else {
                  dispatch(decrease(record));
                }
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Total Price",
      render: (text, record) => {
        return <span>£{(record.quantity * record.price).toFixed(2)}</span>;
      },
    },
    {
      title: "Actions",
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        return (
          <Popconfirm
          title="Are you sure to delete?"
          onConfirm={() => {
            dispatch(deleteCart(record));
            message.success("Product added to basket successfully");
          }}
          okText="Yes"
          cancelText="No"
          >
            <Button
            type="link"
            danger
          >
            Delete
          </Button>
          </Popconfirm>
        );
      },
    },
  ];
  console.log(isModalOpen);
  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x:1200,
            y:300,
          }}
        />
        <div className="CartTotal flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>£{(cart.total).toFixed(2)}</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Tax:</span>
              <span className="text-red-600">+£{((cart.total * cart.tax) / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>£{(cart.total + (cart.total * cart.tax) / 100).toFixed(2)}</span>
            </div>
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              disabled={cart.cartItems.length === 0 }
            >
              Create Order
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
