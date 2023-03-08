import "./index.css";
import { useState, useEffect } from "react";
import TrendsItem from "../trendsItem/TrendsItem";
const TrendsList = () => {
  const [trendsList, setTrendsList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => res.json())
      .then((data) => setTrendsList(data.posts));
  }, []);

  return (
    <div className="TrendsList">
      <h3 className="trends-title">Tendenze per te</h3>
      {trendsList.map((post) => (
        <TrendsItem data={post} key={post.id} />
      ))}
    </div>
  );
};

export default TrendsList;
