import "./index.css";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif, AiTwotoneCalendar } from "react-icons/ai";
import { TfiList } from "react-icons/tfi";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const CommentModal = ({ setCommentModalVisibility }) => {
  const onHandleClick = () => {
    setCommentModalVisibility((prev) => !prev);
  };
  return (
    <div className="CommentModal">
      <div className="overlay" onClick={onHandleClick}></div>
      <div className="comment_wrapper">
        <AiOutlineClose className="comment_closure" onClick={onHandleClick} />
        <span className="profile">
          <img
            className="profile-img"
            src="https://robohash.org/ERICA CANDIDO.png"
            alt="img-profile"
          />
          <textarea placeholder="Tweet your answer"></textarea>
        </span>
        <span className="post-section">
          <div className="post-icons">
            <BsImage className="single_icon" />

            <AiOutlineFileGif className="single_icon" />
            <TfiList className="single_icon" />
            <BsEmojiSmile className="single_icon" />
            <AiTwotoneCalendar className="single_icon" />
            <FiMapPin className="single_icon" />
          </div>
          <button onClick={onHandleClick}>Answer</button>
        </span>
      </div>
    </div>
  );
};

export default CommentModal;
