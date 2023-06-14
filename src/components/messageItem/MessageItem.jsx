import "./index.css";
import { AiOutlineHeart, AiOutlineRetweet, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import RetweetModal from "../retweetModal/RetweetModal";

const MessageItem = ({
  userData,
  setModalVisibility,
  setCommentModalVisibility,
}) => {
  const [isLike, setIsLike] = useState(true);
  const [retweetVisibility, setRetweetVisibility] = useState(false);

  const onHandleLike = () => {
    setIsLike((prev) => !prev);
  };
  const onHandleComment = () => {
    setCommentModalVisibility((prev) => !prev);
  };

  const onHandleUpload = () => {
    setModalVisibility(true);
  };
  const onHandleRetweet = () => {
    setRetweetVisibility((prev) => !prev);
  };

  return (
    <>
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
            <FaRegComment className="comment" onClick={onHandleComment} />
            <AiOutlineRetweet className="retweet" onClick={onHandleRetweet} />
            {retweetVisibility && (
              <RetweetModal setRetweetVisibility={setRetweetVisibility} />
            )}
            {isLike ? (
              <AiOutlineHeart className="like" onClick={onHandleLike} />
            ) : (
              <AiFillHeart className="like-fill" onClick={onHandleLike} />
            )}

            <FiUpload
              //  onClick={onHandleUpload}
              className="upload"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageItem;
