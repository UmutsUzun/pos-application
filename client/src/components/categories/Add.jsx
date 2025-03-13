import { Form, Input, Modal, Button, message } from "antd";

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  setCategories,
}) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      message.success("Category added successfully.");
      form.resetFields();

      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]);
      setIsAddModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export default Add;
