import { Card, Descriptions, Divider, List, Button, icons } from "antd";
import dishes from "../../assets/data/dishes.json";
import {useParams} from 'react-router-dom' ;

//---SETTING FOR UPDATE RESTAURANT DETAIL
import Settings from "../Settings/Settings"
//---for side menu design
import SideMenu from "../Side-menu/sidemenu";
import { Layout, Image } from "antd";

const { Sider, Content, Footer } = Layout;

function OrderDetails() {

  const {id}=useParams() ;

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
    <Card title={`Order ${id}`} style={{ margin: 20 }}>
    <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
      <Descriptions.Item label="Customer Name">
        ashutosh pahariya
      </Descriptions.Item>
      <Descriptions.Item label="Customer Address">Orai</Descriptions.Item>
    </Descriptions>
    <Divider />
    <List
      dataSource={dishes}
      renderItem={(dishItem) => (
        <List.Item>
          <div style={{ fontWeight: "bold" }}>
            {dishItem.name} x{dishItem.quantity}
          </div>

          <div>${dishItem.price}</div>
        </List.Item>
      )}
    />
    <Divider />
    <div style={{ flexDirection: "row", display: "flex" }}>
      <h2> Total Amount:</h2>
      <h2 style={styles.totalprice}>$500</h2>
    </div>
    <Divider/>
    <div style={styles.buttonstyles}> 
    <Button block type="danger" size="large" 
    style={styles.button}>DECLINE ORDER</Button>
    <Button block type="primary" size="large"
     style={styles.button}>ACCEPT ORDER</Button>
    </div>
    <Button block type="primary" size="large">FOOD IS DONE</Button>
  </Card>
  //      </Content>
  //     <Footer style={{ textAlign: "center" }}>
  //       UBER EATS RESTAURANT DASHBOARD DESIGN BY ASHUTOSH
  //     </Footer>
  //   </Layout>
  // </Layout> 
  );
}

const styles = {
  totalprice: {
    marginLeft: "auto",
    fontWeight: "bold",
    
  },
  buttonstyles: {
    display:'flex',
    paddingBottom:30,
  },
  button:{
marginRight:20,
marginLeft:20
   
  }
};
export default OrderDetails;
