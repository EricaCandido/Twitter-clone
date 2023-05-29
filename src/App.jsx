import { useState } from "react";
import "./App.css";
import SideMenu from "./components/sideMenu/SideMenu";
import Content from "./components/content/Content";
import SideTrends from "./components/sideTrends/SideTrends";
import Footer from "./components/footer/Footer";
import ModalUpload from "./components/modalUpload";
import CommentModal from "./components/commentModal";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [commentModalVisibility, setCommentModalVisibility] = useState(false);

  return (
    <div className="App">
      <SideMenu />
      <Content
        setModalVisibility={setModalVisibility}
        setCommentModalVisibility={setCommentModalVisibility}
      />
      <SideTrends />
      <Footer />
      {modalVisibility && (
        <ModalUpload setModalVisibility={setModalVisibility} />
      )}
      {commentModalVisibility && (
        <CommentModal
          commentModalVisibility={commentModalVisibility}
          setCommentModalVisibility={setCommentModalVisibility}
        />
      )}
    </div>
  );
}

export default App;
