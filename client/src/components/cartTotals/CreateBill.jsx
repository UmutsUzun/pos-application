import {Modal , Form , Input , Select,Card,Button } from "antd"
const CreateBill = ({isModalOpen, setIsModalOpen}) => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };
  return (
    
        <Modal
         title="Create new Invoice" 
         open={isModalOpen} 
         footer={false}
         onCancel={() => setIsModalOpen(false)}
         
         >
            <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Customer Name"
          name={"customerName"}
          rules={[
            {
              required: true,
              message: "Username is required",
            },
          ]}
        >
          <Input placeholder="Please type your name" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name={"phoneNumber"}
          label="Phone Number"
        >
          <Input placeholder="Please type your phone number" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Payment Method"
          rules={[{ required: true }]}
          name={"paymentMode"}
        >
          <Select placeholder="Please select a payment mathod">
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Credit Card">Credit Card</Select.Option>
          </Select>
        </Form.Item>
        <Card>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>£57</span>
          </div>
          <div className="flex justify-between my-2">
            <span>Tax:</span>
            <span className="text-red-600">+£2.5</span>
          </div>
          <div className="flex justify-between">
            <b>Total:</b>
            <b>£59.5</b>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
            >
              Create Order
            </Button>
          </div>
        </Card>
      </Form>
            
      </Modal>
    
  )
}

export default CreateBill