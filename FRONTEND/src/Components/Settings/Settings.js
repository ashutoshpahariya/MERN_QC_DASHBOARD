import { Form, Input, Card, Button } from "antd";
import React, { useEffect, useState } from "react";
//---for side menu design
import SideMenu from "../Side-menu/sidemenu";
import { Layout, Image } from "antd";

//---GOOGLE RESTAURANT LOCATION
//---GOOGLE HAS A METHOD OF LATITUDE AND LONGITUDE
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
const { Sider, Content, Footer } = Layout;

const Settings = () => {
  const [address, setAddress] = useState(null);
  const [Coordinates, setCoordinates] = useState(null);

  const getAddressLatANDlong = async (address) => {
    setAddress(address);
    //---DECODING THE ADDRESS
    const geocodeByAddres = await geocodeByAddress(address.label);
    const LatANDlong = await getLatLng(geocodeByAddres[0]);
    setCoordinates(LatANDlong);
    console.log("geocode", geocodeByAddres);
    console.log("latlong", LatANDlong);
  };
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
      <Card title="Restaurant Details" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Restaurant Name" required>
          <Input placeholder="Enter restaurant name here" />
        </Form.Item>
        <Form.Item label="Restaurant Address" required>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyCo88DfUDZWtQQEDaysJVz9lsPDHz-Vz2A"
            selectProps={{
              value: address,
              onChange: getAddressLatANDlong,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <span>
        {Coordinates?.lat} - {Coordinates?.lng}
      </span>
    </Card>
    //      </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       UBER EATS RESTAURANT DASHBOARD DESIGN BY ASHUTOSH
    //     </Footer>
    //   </Layout>
    // </Layout> 
  );
};
export default Settings;
