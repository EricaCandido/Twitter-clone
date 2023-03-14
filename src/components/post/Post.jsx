import "./index.css";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif, AiTwotoneCalendar } from "react-icons/ai";
import { TfiList } from "react-icons/tfi";
import { FiMapPin } from "react-icons/fi";

const Post = () => {
  return (
    <div className="Post">
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
  );
};

export default Post;
