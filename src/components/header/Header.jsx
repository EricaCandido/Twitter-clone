import "./index.css";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuTrigger = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const [showBookMark, setShowBookMark] = useState(false);
  const onHandlePerTe = () => {
    setShowBookMark(!showBookMark);
    console.log(showBookMark);
  };

  return (
    <div className="Header">
      <div className="Header-up">
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
      <div className="Header-down">
        <p className="per-te" onClick={onHandlePerTe}>
          Per te
        </p>
        <p className="seguiti">Seguiti</p>
      </div>
    </div>
  );
};

export default Header;
