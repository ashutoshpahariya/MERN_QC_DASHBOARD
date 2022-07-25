import { Menu  , Button} from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "orders",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Menu",
    },
    {
      key: "order-history",
      label: "Order History",
    },
    {
      key: "settings",
      label: "Settings",
    },
  ];
  const logoutUser = () => {

    localStorage.removeItem("token");
  //  window.location.reload();
    navigate("/")

  };
  return (
    <>
    <Menu items={menuItems} onClick={(menuitem) => navigate(menuitem.key)} />
    <Button style={{position: 'relative', left: '10px', top: '1rem'}}
    type='danger' onClick={logoutUser}> Logout </Button>
    </>
  );
};
export default SideMenu;
