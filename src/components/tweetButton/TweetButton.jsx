import "./index.css";
import { useRef } from "react";

const TweetButton = () => {
  //esercizio 09-03-2023
  //mi scuso per la poca fantasia ma non ho capito bene quali potrebbero essere le applicazioni reali di useRef
  //ad ogni modo, in questo caso l'ho utilizzato per selezionarmi un elemento del dom
  //cioè il TweetButton e visualizzarlo in console al click dello stesso
  const tweetButtonRef = useRef(null);

  return (
    <div ref={tweetButtonRef} className="TweetButton">
      <button onClick={() => console.log(tweetButtonRef.current)}>
        <p className="plus">+</p>
        <img
          className="tweet_icon"
          src="https://img.icons8.com/material-rounded/256/quill-pen.png"
          alt="ink-icon"
        />
        <p className="literal_tweet">Tweet</p>
      </button>
    </div>
  );
};

export default TweetButton;
