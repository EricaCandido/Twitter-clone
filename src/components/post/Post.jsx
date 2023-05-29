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
          <BsImage className="single_icon" />

          <AiOutlineFileGif className="single_icon" />
          <TfiList className="single_icon" />
          <BsEmojiSmile className="single_icon" />
          <AiTwotoneCalendar className="single_icon" />
          <FiMapPin className="single_icon" />
        </div>

        <button className="header-twit-btn">Tweet</button>
      </section>
    </div>
  );
};

export default Post;
