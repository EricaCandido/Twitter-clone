import "./index.css";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif, AiTwotoneCalendar } from "react-icons/ai";
import { TfiList } from "react-icons/tfi";
import { FiMapPin } from "react-icons/fi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuTrigger = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const [showBookMark, setShowBookMark] = useState(true);
  const bookMarkTrigger = () => {
    setShowBookMark(!showBookMark);
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
        <p className="per-te" onClick={bookMarkTrigger}>
          Per te
        </p>

        {
          <div
            className={`bookMark  ${showBookMark == false ? "bm" : ""}`}
          ></div>
        }
        <p onClick={bookMarkTrigger} className={`seguiti`}>
          Seguiti
        </p>
      </div>
      <div className="post-input">
        <section className="first-row">
          <img
            className="profile-img"
            src="https://robohash.org/ERICA CANDIDO.png"
            alt="img-profile"
          />
          <input type="text" placeholder="What's up?" required />
        </section>
        <section className="second-row">
          <div className="post-icons">
            <BsImage />
            <AiOutlineFileGif />
            <TfiList />
            <BsEmojiSmile />
            <AiTwotoneCalendar />
            <FiMapPin />
          </div>
          <button className="header-twit-btn">Twit</button>
        </section>
      </div>
    </div>
  );
};

export default Header;
