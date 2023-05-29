import "./index.css";
import TrendsItem from "../trendsItem/TrendsItem";
const TrendsList = ({ trendsList }) => {
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
