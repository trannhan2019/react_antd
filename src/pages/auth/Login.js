import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { blue } from "@ant-design/colors";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Avatar, Image } from "antd";

import LoginBackground from "../../assets/images/login-bg.jpg";

const { Title } = Typography;

const Login = () => {
  return (
    <Row>
      <Col
        xs={0}
        md={16}
        style={{
          backgroundImage: `url(${LoginBackground})`,
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      />

      <Col
        xs={24}
        md={8}
        style={{
          backgroundColor: `#fafafa`,
          padding: "30px 20px",
          borderRadius: "5px",
          minHeight: "100vh",
        }}
      >
        <div style={{ marginTop: "25%" }}>
          <div style={{ textAlign: "center" }}>
            <Avatar
              style={{ backgroundColor: "#722ed1" }}
              icon={<UserOutlined />}
              size="large"
            />
            <Title style={{ color: "#722ed1" }} level={3}>
              Login
            </Title>
          </div>

          <Divider />

          <Form name="login_form">
            <Form.Item name="email">
              <Input
                type="email"
                prefix={<MailOutlined />}
                placeholder="Enter your email"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Input password"
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
