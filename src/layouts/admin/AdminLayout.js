import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
