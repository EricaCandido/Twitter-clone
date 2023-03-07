import "./index.css";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuTrigger = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div className="Header">
      <div className="hamburger" onClick={menuTrigger}>
        <hr />
        <hr />
        <hr />
        <HamburgerMenu showMenu={showMenu} />
      </div>
      <p className="Home">Home</p>
      <img
        className="logo"
        src="https://img.icons8.com/fluency/50/twitter.png"
        alt="twitter logo"
      />
      <img
        className="sparkle"
        src="https://img.icons8.com/fluency-systems-regular/256/sparkling.png"
        alt="effect image"
      />
    </div>
  );
};

export default Header;
