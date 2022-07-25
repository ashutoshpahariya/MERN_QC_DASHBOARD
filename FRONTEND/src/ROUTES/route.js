//---LOGIN PAGE
import LoginPage from "../Components/LOGIN/login";
//---REGISTER PAGE
import RegisterPage from "../Components/REGISTER/register";
//---PARITCULAR ORDERS DETAIL
import OrderDetails from "../Components/Orders_OrdersDetail/OrderDetail";
//---ALL ORDERS
import Orders from "../Components/Orders_OrdersDetail/Orders";
//----VIEW RESTAURENT MENU
import RestaurantMenu from "../Components/Restaurant-Menu/restaurant";
//---ADD NEW MENU ITEM
import AddNewMenuItem from "../Components/Restaurant-Menu/AddNewItemMenu";
//---ALL THE ORDERS HISTORY
import OrdersHistory from "../Components/Orders_History/Orders_History";
//---SETTING FOR UPDATE RESTAURANT DETAIL
import Settings from "../Components/Settings/Settings";
//---FOR CREATE END POINT
import { Routes, Route ,Redirect } from "react-router-dom";
//---for side menu design
import { Layout, Image } from "antd";
//---side menu details
import SideMenu from "../Components/Side-menu/sidemenu";

import { useNavigate } from "react-router-dom";

const { Sider, Content, Footer } = Layout;

function RoutePath() {
  //---FOR JWT VERIFICATION
  const User = localStorage.getItem("token");
  const Navigate=useNavigate()
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
      </Routes>

      {User &&(
        <Layout>
          <Sider style={{ height: "130vh", backgroundColor: "white" }}>
            <Image
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/zomatofood_660_210120100713.jpg?size=948:533"
              preview={false}
            />
            <SideMenu />
          </Sider>
          <Layout>
            <Content>
              <Routes>
                <Route path="orders" exact element={<Orders />} />:
                <Route path="order/:id" exact element={<OrderDetails />} />
                <Route path="menu" exact element={<RestaurantMenu />} />
                <Route path="menu/create" exact element={<AddNewMenuItem />} />
                <Route path="order-history" exact element={<OrdersHistory />} />
                <Route path="Settings" exact element={<Settings />} />

              </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              UBER EATS RESTAURANT DASHBOARD DESIGN BY ASHUTOSH
            </Footer>
          </Layout>
        </Layout>
      ) }
    </>
  );
}
export default RoutePath;
