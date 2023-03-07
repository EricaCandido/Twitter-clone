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
          <AiOutlineHome />
          <p>Home</p>
        </li>
        <li>
          <BiHash />
          <p>Explore</p>
        </li>
        <li>
          <AiOutlineBell />
          <p>Notifications</p>
        </li>
        <li>
          <BiEnvelope />
          <p>Messagges</p>
        </li>
        <li>
          <BsBookmark />
          <p>Bookmarks</p>
        </li>
        <li>
          <CiViewList /> <p>Lists</p>
        </li>
        <li>
          <img
            class="profile-img"
            src="https://robohash.org/ERICA CANDIDO.png"
            alt="img-profile"
          />
          <p>Profile</p>
        </li>
        <li>
          <BsThreeDots />
          <p>More</p>
        </li>
      </ul>
    </div>
  );
};
export default MenuContent;
