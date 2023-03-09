import MenuContent from "../menuContent";
import "./index.css";
import { IoLogoTwitter } from "react-icons/io";
import TweetButton from "../tweetButton";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <IoLogoTwitter className="logo-twitter" />
      <MenuContent />
      <TweetButton className="tweetBtn-side" />
    </div>
  );
};

export default SideMenu;
