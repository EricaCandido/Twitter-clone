import "./index.css";
import { AiOutlineHeart, AiOutlineRetweet, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";

const MessageItem = ({ userData }) => {
  const [isLike, setIsLike] = useState(true);
  const onHandleLike = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <div className="MessageItem">
      <img
        className="profile-pic"
        src={`https://robohash.org/${userData.firstName}`}
        alt="photo profile"
      />
      <div className="text-container">
        <span className="userName">{`${userData.firstName} ${userData.lastName}`}</span>
        <span className="email">{`@${userData.username}`}</span>
        <p className="tweet">{userData.message}</p>
        <div className="reactions">
          <FaRegComment className="comment" />
          <AiOutlineRetweet className="retweet" />
          {isLike ? (
            <AiOutlineHeart className="like" onClick={onHandleLike} />
          ) : (
            <AiFillHeart className="like-fill" onClick={onHandleLike} />
          )}

          <FiUpload className="upload" />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
