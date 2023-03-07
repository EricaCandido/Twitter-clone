import "./index.css";
import MenuContent from "../menuContent";
const HamburgerMenu = ({ showMenu }) => {
  return (
    <div className={`HamburgerMenu ${showMenu == true ? "show" : ""}`}>
      <MenuContent />
    </div>
  );
};

export default HamburgerMenu;
