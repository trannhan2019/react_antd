import { Layout, Menu } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./AdminLayout.css";
import React, { useState } from "react";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsedWidth={0}
        collapsed={collapsed}
        collapsible
        width="250"
        trigger={null}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["sub3"]}
          defaultOpenKeys={["sub3"]}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Nav 2
          </Menu.Item>
          <SubMenu title="Subnav 3" key="sub3" icon={<UploadOutlined />}>
            <Menu.Item key="3-1">option1</Menu.Item>
            <Menu.Item key="3-2">option2</Menu.Item>
            <Menu.Item key="3-3">option3</Menu.Item>
            <Menu.Item key="3-4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => {
                handleCollapsed();
              },
            }
          )}
          {/* {collapsed ? <MenuUnfoldOutlined className="trigger"/> : <MenuFoldOutlined className="trigger"/>} */}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
