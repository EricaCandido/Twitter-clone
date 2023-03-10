import { useState } from "react";
import "./index.css";
import { SlClose } from "react-icons/sl";

const ModalUpload = ({ setModalVisibility }) => {
  const [FirstNameInput, setFirstNameInput] = useState("");
  const [SecondNameInput, setSecondNameInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/users/${userIdInput}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: FirstNameInput,
        lastName: SecondNameInput,
      }),
    })
      .then(console.log("fatto"))
      .then(setModalVisibility(false));
  };

  return (
    <div className="ModalUpload">
      <p className="formTitle">Upload a user</p>

      <SlClose
        className="modalClosure"
        onClick={() => setModalVisibility(false)}
      />

      <form onSubmit={onHandleSubmit}>
        <input
          onChange={(e) => setFirstNameInput(e.target.value)}
          type="text"
          placeholder="New first name"
          value={FirstNameInput}
        />
        <input
          onChange={(e) => setSecondNameInput(e.target.value)}
          type="text"
          placeholder="New second name"
          value={SecondNameInput}
        />
        <input
          onChange={(e) => setUserIdInput(e.target.value)}
          type="number"
          placeholder="User id"
          value={userIdInput}
        />
        <input className="uploadBtn" type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default ModalUpload;
