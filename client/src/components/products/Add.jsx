import { Button, Form, Input, message, Modal, Select } from "antd";
 import React from "react";
 
 const Add = ({
   isAddModalOpen,
   setIsAddModalOpen,
   categories,
   products,
   setProducts,
 }) => {
   const [form] = Form.useForm();
 
   const onFinish = (values) => {
     try {
       fetch("http://localhost:5000/api/products/add-product", {
         method: "POST",
         body: JSON.stringify(values),
         headers: { "Content-type": "application/json; charset=UTF-8" },
       });
       message.success("Product added successfully.");
       form.resetFields();
       setProducts([
         ...products,
         {
           ...values,
           _id: Math.random(),
           price: Number(values.price),
         },
       ]);
       setIsAddModalOpen(false)
     } catch (error) {
       console.log(error);
     }
   };
 
   return (
     <Modal
       title="Add New Product"
       open={isAddModalOpen}
       onCancel={() => setIsAddModalOpen(false)}
       footer={false}
     >
       <Form layout="vertical" onFinish={onFinish} form={form}>
         <Form.Item
           name="title"
           label="Name of Product"
           rules={[{ required: true, message: "Product Name field cannot be left empty!" }]}
         >
           <Input placeholder="Please enter the product name." />
         </Form.Item>
         <Form.Item
           name="img"
           label="Image of Product"
           rules={[
             { required: true, message: "Product Image field cannot be left empty!" },
           ]}
         >
           <Input placeholder="Please upload the product image." />
         </Form.Item>
         <Form.Item
           name="price"
           label="Product price"
           rules={[
             { required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez!" },
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
             Create
           </Button>
         </Form.Item>
       </Form>
     </Modal>
   );
 };
 
 export default Add;