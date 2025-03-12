import { Form, Input, Button, Carousel } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";
const RegisterPage = () => {
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
              label="E-mail:"
              name={"email"}
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
              label="Password verification:"
              name={"passwordAgain"}
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "This field is mandatory ! ",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Do you have an account?&nbsp;{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff]">
          <div className="w-full">
            <Carousel className="!h-full px-6" autoplay>
              <AuthCarousel
                img="/images/responsive.svg"
                title="Responsive"
                desc="Compatible with all devices"
              />
              <AuthCarousel
                img="/images/statistic.svg"
                title="Statistics"
                desc="Widely held statistics"
              />
              <AuthCarousel
                img="/images/customer.svg"
                title="Customer Satisfaction"
                desc="Customers are satisfied with the product at the end of the experiences"
              />
              <AuthCarousel
                img="/images/admin.svg"
                title="Admin Panel"
                desc="One Stop Management"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
