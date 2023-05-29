import Search from "../search/Search";
import TrendsList from "../trendsList/TrendsList";
import "./index.css";
import { useState, useEffect } from "react";

const SideTrends = () => {
  const [trendsList, setTrendsList] = useState([]);
  const [defaultTrendsList, setDefaultTrendsList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => res.json())
      .then((data) => setTrendsList(data.posts));
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => res.json())
      .then((data) => setDefaultTrendsList(data.posts));
  }, []);
  return (
    <div className="SideTrends">
      <Search
        trendsList={trendsList}
        setTrendsList={setTrendsList}
        defaultTrendsList={defaultTrendsList}
      />
      <TrendsList trendsList={trendsList} />
    </div>
  );
};

export default SideTrends;
