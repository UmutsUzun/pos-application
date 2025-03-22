import {Modal , Form , Input , Select,Card,Button,message } from "antd"
import {useSelector , useDispatch} from "react-redux"
import {reset} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const CreateBill = ({isModalOpen, setIsModalOpen}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const navigate =useNavigate()
    const onFinish =  async (values) => {
      try {
        
        const res = await fetch("http://localhost:5000/api/invoices/add-invoice",{
          method: "POST",
          body: JSON.stringify({
            ...values,
            subTotal:cart.total,
            tax: ((cart.total * cart.tax) / 100).toFixed(2),
            totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
            cartItems:cart.cartItems,
          }),
          headers: {"Content-type":"application/json; charset=UTF-8"}
        });

        if(res.status===200){
          message.success("Invoice created successfully")
          dispatch(reset());
          navigate("/invoices")
        }
        
      } catch (error) {
        message.success("Invoice could not be created")
        console.log(error);
      }
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
          name={"customerPhoneNumber"}
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