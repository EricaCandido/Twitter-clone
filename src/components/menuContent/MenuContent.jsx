import "./index.css";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";

import { BiHash, BiEnvelope } from "react-icons/bi";

import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <ul>
        <li>
          <AiOutlineHome className="menuContent-icon" />
          <p>Home</p>
        </li>
        <li>
          <BiHash className="menuContent-icon" />
          <p>Explore</p>
        </li>
        <li>
          <AiOutlineBell className="menuContent-icon" />
          <p>Notifications</p>
        </li>
        <li>
          <BiEnvelope className="menuContent-icon" />
          <p>Messagges</p>
        </li>
        <li>
          <BsBookmark className="menuContent-icon" />
          <p>Bookmarks</p>
        </li>
        <li>
          <CiViewList className="menuContent-icon" /> <p>Lists</p>
        </li>
        <li>
          <img
            className="profile-img"
            src="https://robohash.org/ERICA CANDIDO.png"
            alt="img-profile"
          />
          <p>Profile</p>
        </li>
        <li>
          <BsThreeDots className="menuContent-icon" />
          <p>More</p>
        </li>
      </ul>
    </div>
  );
};
export default MenuContent;
