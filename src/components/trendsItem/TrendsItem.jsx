import "./index.css";

const TrendsItem = ({ data }) => {
  return (
    <div className="TrendsItem">
      <p className="tag">{`${data.tags[0]}· Di tendenza`}</p>
      <p className="hash">{`#${data.title.replace(/ /g, "").slice(0, 18)}`}</p>
      <p className="tweets">{`${data.reactions} Tweet`}</p>
    </div>
  );
};

export default TrendsItem;
