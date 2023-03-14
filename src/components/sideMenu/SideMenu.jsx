import MenuContent from "../menuContent";
import "./index.css";
import { IoLogoTwitter } from "react-icons/io";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <IoLogoTwitter className="logo-twitter" />
      <MenuContent />
    </div>
  );
};

export default SideMenu;
