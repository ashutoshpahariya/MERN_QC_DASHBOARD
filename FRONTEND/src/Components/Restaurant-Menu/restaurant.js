import { Card, Table, Button, Popconfirm } from "antd";
 import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { DataStore } from "aws-amplify";
import  dishes  from "../../assets/data/dishes.json";
//import { useRestaurantContext } from "../../contexts/RestaurantContext";

//---SETTING FOR UPDATE RESTAURANT DETAIL
import Settings from "../Settings/Settings"
//---for side menu design
import SideMenu from "../Side-menu/sidemenu";
import { Layout, Image } from "antd";

const { Sider, Content, Footer } = Layout;
const RestaurantMenu = () => {

  const tableColumns = [
    {
      title: "Menu Item",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price}$`,
    },
    {
      title: "Action",
      key: "action",
    render: () => (

          <Button danger>Remove</Button>
         
      ),
    },
  ];

  //---NEW BUTTON IN MENU ADD NEW DATA
  const renderNewItemButton = () => (
    <Link to={"create"}>
      <Button type="primary">New Item</Button>
    </Link>
  );

  return (
    //---EXTRA PROPERTY RENDER THE BUTTON
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
       <Card title={"Menu"} style={{ margin: 20 }} extra={renderNewItemButton()} >
      <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
    </Card>
    //      </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       UBER EATS RESTAURANT DASHBOARD DESIGN BY ASHUTOSH
    //     </Footer>
    //   </Layout>
    // </Layout> 
  );
};

export default RestaurantMenu;
