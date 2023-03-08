import "./index.css";
import { messageList } from "../../mocks/messageList";
import { useState } from "react";

const MessageItem = ({ userData }) => {
  const [counter, setCounter] = useState(-1);

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
          <img
            src="https://img.icons8.com/ios/256/speech-bubble.png"
            alt="comment-icon"
          />
          <img
            src="https://img.icons8.com/material-rounded/256/retweet.png"
            alt="retweet-icon"
          />
          <img
            src="https://img.icons8.com/material-outlined/256/hearts.png"
            alt="like-icon"
          />
          <img
            src="https://img.icons8.com/ios/256/upload.png"
            alt="upload-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
