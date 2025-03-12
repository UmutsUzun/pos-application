import { Form, Input, Button , Carousel, Checkbox } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";
const LoginPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Username:"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "This field is mandatory ! ",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password :"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "This field is mandatory ! ",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item 
            name={"remember"} valuePropName="checked">
              <div className="flex justify-between items-center">
                <Checkbox>Remember Me</Checkbox>
                <Link>Forgot Password</Link>
              </div>

            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Don't have an account yet ?&nbsp;{" "}
            <Link to="/register" className="text-blue-600">
              Sign up
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff]">
          <div className="w-full">
            <Carousel className="!h-full px-6" autoplay >
                <AuthCarousel img="/images/responsive.svg" title="Responsive"
                desc="Compatible with all devices"/>
                <AuthCarousel img="/images/statistic.svg" title="Statistics"
                desc="Widely held statistics"/>
                <AuthCarousel img="/images/customer.svg" title="Customer Satisfaction"
                desc="Customers are satisfied with the product at the end of the experiences"/>
                <AuthCarousel img="/images/admin.svg" title="Admin Panel"
                desc="One Stop Management"/>

            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
