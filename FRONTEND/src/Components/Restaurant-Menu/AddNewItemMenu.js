import { Form, Input, Button, Card, InputNumber } from "antd";
//---SETTING FOR UPDATE RESTAURANT DETAIL
import Settings from "../Settings/Settings"
//---for side menu design
import SideMenu from "../Side-menu/sidemenu";
import { Layout, Image } from "antd";

const { Sider, Content, Footer } = Layout;

const { TextArea } = Input;
const AddNewMenuItem = () => {
  return (
    // <Layout>
    //   <Sider style={{ height: "130vh", backgroundColor: "white" }}>
    //     <Image
    //       src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/zomatofood_660_210120100713.jpg?size=948:533"
    //       preview={false}
    //     />
    //   <SideMenu />
    //   </Sider>
    //   <Layout>
    //     <Content>
       <Card title="Add New Menu Item" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{span:8}}>
        <Form.Item label="Restaurant name" required>
          <Input placeholder="Enter Restaurant Name" />
        </Form.Item>
        <Form.Item label="Restaurant Dish name" required>
          <Input placeholder="Enter Restaurant Dish Name" />
        </Form.Item>
        <Form.Item label="Restaurant Dish Description" required>
          <TextArea rows={2} placeholder="Enter Restaurant Dish Description" />
        </Form.Item>
        <Form.Item label="Dish Price ($)" required>
          <InputNumber/>
        </Form.Item>
        <Button type="primary">Submit</Button>
      </Form>
    </Card>
    //      </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       UBER EATS RESTAURANT DASHBOARD DESIGN BY ASHUTOSH
    //     </Footer>
    //   </Layout>
    // </Layout> 
  );
};
export default AddNewMenuItem;
