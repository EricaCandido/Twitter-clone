import "./index.css";
import Header from "../header/Header";
import MessageList from "../messageList/MessageList";
import TweetButton from "../tweetButton/TweetButton";
import Post from "../post/Post";

const Content = ({ setModalVisibility }) => {
  return (
    <div className="Content">
      <Header />
      <Post />
      <MessageList setModalVisibility={setModalVisibility} />
      <TweetButton />
    </div>
  );
};

export default Content;
