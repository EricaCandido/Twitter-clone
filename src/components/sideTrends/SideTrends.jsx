import Search from "../search/Search";
import TrendsList from "../trendsList/TrendsList";
import "./index.css";

const SideTrends = () => {
  return (
    <div className="SideTrends">
      <Search />
      <TrendsList />
    </div>
  );
};

export default SideTrends;
