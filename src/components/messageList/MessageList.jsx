import "./index.css";
import MessageItem from "../messageItem/MessageItem";
import { useEffect, useState } from "react";
import messageList from "../../mocks/messageList";

const MessageList = () => {
  const [userData, setUserData] = useState([]);

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
      {userData.map((user) => (
        <MessageItem userData={user} key={user.id} />
      ))}
    </div>
  );
};

export default MessageList;
