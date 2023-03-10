import { useState } from "react";
import "./App.css";
import SideMenu from "./components/sideMenu/SideMenu";
import Content from "./components/content/Content";
import SideTrends from "./components/sideTrends/SideTrends";
import Footer from "./components/footer/Footer";
import ModalUpload from "./components/modalUpload";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div className="App">
      <SideMenu />
      <Content setModalVisibility={setModalVisibility} />
      <SideTrends />
      <Footer />
      {modalVisibility && (
        <ModalUpload setModalVisibility={setModalVisibility} />
      )}
    </div>
  );
}

export default App;
