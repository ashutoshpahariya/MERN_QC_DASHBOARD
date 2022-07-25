import ordersHistory from "../../assets/data/orders-history.json";
import { Card, Table, Tag } from "antd";
import Settings from "../Settings/Settings"
//---for side menu design
import SideMenu from "../Side-menu/sidemenu";
import { Layout, Image } from "antd";

const { Sider, Content, Footer } = Layout;
const OrdersHistory = () => {
 
  //---TABLE DETAIL OF ALL ORDER
  const tableColumns = [
    {
      title: "orderID",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "deliveryAddress",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price}$`,
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render:(orderStatus)=> <Tag color={orderStatus==='Delivered' ? "green": "red"}>{orderStatus}</Tag>
    },
  ];
  return (
    // <Layout>
    // <Sider style={{ height: "130vh", backgroundColor: "white" }}>
    //   <Image
    //     src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/zomatofood_660_210120100713.jpg?size=948:533"
    //     preview={false}
    //   />
    // <SideMenu />
    // </Sider>
    // <Layout>
    //   <Content>
     <Card title={"Orders History"} style={{ margin: 20 }}>
    <Table

      dataSource={ordersHistory}
      columns={tableColumns}
      rowKey="orderID"
    />
  </Card>
  //      </Content>
  //     <Footer style={{ textAlign: "center" }}>
  //       UBER EATS RESTAURANT DASHBOARD DESIGN BY ASHUTOSH
  //     </Footer>
  //   </Layout>
  // </Layout> 
  );
};
export default OrdersHistory;
