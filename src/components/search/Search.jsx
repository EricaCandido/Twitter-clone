import "./index.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Search = ({ trendsList, setTrendsList, defaultTrendsList }) => {
  const [input, setInput] = useState("");
  const onHandleChange = (e) => setInput(() => e.target.value.toLowerCase());

  const filteredList = trendsList.filter((item) =>
    item.body.toLowerCase().includes(input)
  );

  const onSubmitSearch = (e) => {
    e.preventDefault();
    setTrendsList(filteredList);
  };
  const onHandleClick = () => {
    setTrendsList(defaultTrendsList);
  };
  return (
    <div className="Search">
      <AiOutlineSearch className="search-icon" />
      <form action="">
        <input
          className="search-input"
          type="text"
          name="input"
          placeholder="Search on Twitter"
          onChange={onHandleChange}
          onClick={onHandleClick}
        />
        <input className="invia" onClick={onSubmitSearch} type="submit"></input>
      </form>
    </div>
  );
};

export default Search;
