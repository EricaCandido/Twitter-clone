import "./index.css";
import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";

const RetweetModal = ({ setRetweetVisibility }) => {
  const onHandleClick = () => {
    setRetweetVisibility((prev) => !prev);
  };
  return (
    <div className="RetweetModal">
      <div className="retweet_overlay" onClick={onHandleClick}></div>
      <div className="retweet_wrapper">
        <span className="line">
          <AiOutlineRetweet />
          <p>Retweet</p>
        </span>
        <span className="line">
          <TbPencilMinus />
          <p>Cite tweet</p>
        </span>
      </div>
    </div>
  );
};
export default RetweetModal;
