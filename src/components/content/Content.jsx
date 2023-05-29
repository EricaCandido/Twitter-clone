import "./index.css";
import Header from "../header/Header";
import MessageList from "../messageList/MessageList";
import Post from "../post/Post";

const Content = ({ setModalVisibility, setCommentModalVisibility }) => {
  return (
    <div className="Content">
      <Header />
      <Post />
      <MessageList
        setModalVisibility={setModalVisibility}
        setCommentModalVisibility={setCommentModalVisibility}
      />
      {/* <TweetButton /> */}
    </div>
  );
};

export default Content;
