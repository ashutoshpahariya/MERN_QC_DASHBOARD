import orders from "../../assets/data/orders.json";
import { Card, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
//---SETTING FOR UPDATE RESTAURANT DETAIL
import Settings from "../Settings/Settings"
//---for side menu design
import SideMenu from "../Side-menu/sidemenu";
import { Layout, Image } from "antd";

const { Sider, Content, Footer } = Layout;

const Orders = () => {
  //---useNavigate IS USED FOR NAVIGATION LIKE WHEN WE CLICK
  //---ORDERID IT WILL OPEN ORDER DETAILS
  const navigate=useNavigate()
    //---STATUS DETAIL OF ALL ORDER
  const RenderOrderStutus = (orderStatus) => {
    console.log(orderStatus);
    if (orderStatus === "Accepted") {
      return <Tag color={"green"}>{orderStatus}</Tag>;
    }
    if (orderStatus === "Pending") {
      return <Tag color={"orange"}>{orderStatus}</Tag>;
    }
    if (orderStatus === "Declined") {
      return <Tag color={"red"}>{orderStatus}</Tag>;
    }
  };

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
      render: RenderOrderStutus,
    },
  ];
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
         <Card title={"Orders"} style={{ margin: 20 }}>
      <Table
        dataSource={orders}
        columns={tableColumns}
        rowKey="orderID"
         onRow={(orderItem) => ({
         onClick: () =>navigate(`order/${orderItem.orderID}`) ,
          })}
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

export default Orders;
