import "./index.css";
import MessageItem from "../messageItem/MessageItem";
import { useEffect, useState } from "react";
import messageList from "../../mocks/messageList";

const MessageList = ({ setModalVisibility, setCommentModalVisibility }) => {
  const [userData, setUserData] = useState([]);
  const [showNtweets, setShowNtweets] = useState(false);

  const onHandleClick = () => {
    setShowNtweets(!showNtweets);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.users.map((item, i) => {
          const newItem = {
            ...item,
            message: messageList[i].body,
          };
          return newItem;
        });
        setUserData(newData);
      });
  }, []);

  return (
    <div className="MessageList">
      {console.log(showNtweets)}
      {!showNtweets ? (
        <p className="showNtweet" onClick={onHandleClick}>
          Show {userData.length} tweets
        </p>
      ) : (
        <p className="showNtweet" onClick={onHandleClick}>
          Show {userData.length / 2} tweets
        </p>
      )}

      {!showNtweets
        ? userData
            .slice(0, userData.length / 2)
            .sort((x, y) => x.height - y.height)
            .map((user) => (
              <MessageItem
                setModalVisibility={setModalVisibility}
                setCommentModalVisibility={setCommentModalVisibility}
                userData={user}
                key={user.id}
              />
            ))
        : userData
            // .sort((x, y) => x.height - y.height)
            .map((user) => (
              <MessageItem
                setCommentModalVisibility={setCommentModalVisibility}
                setModalVisibility={setModalVisibility}
                userData={user}
                key={user.id}
              />
            ))}
    </div>
  );
};

export default MessageList;
