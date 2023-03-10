import "./index.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="Search">
      <AiOutlineSearch className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search on Twitter"
      />
    </div>
  );
};

export default Search;
