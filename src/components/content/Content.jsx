import "./index.css";
import Header from "../header/Header";
import MessageList from "../messageList/MessageList";
import TweetButton from "../tweetButton/TweetButton";

const Content = ({ setModalVisibility }) => {
  return (
    <div className="Content">
      <Header />
      <MessageList setModalVisibility={setModalVisibility} />
      <TweetButton />
    </div>
  );
};

export default Content;
