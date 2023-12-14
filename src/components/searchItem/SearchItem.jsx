import { Link } from "react-router-dom";
import "./SearchItem.css";
const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio apartment with AC</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">you can cancel later</span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailsTexts">
          <span className="isPrice">${item.cheapestPrice}</span>
          <span className="isTaxOp">Include taxes and fee</span>

          <Link to={"/hotels/${item._id}"}>
            <button className="siCheckButton">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
