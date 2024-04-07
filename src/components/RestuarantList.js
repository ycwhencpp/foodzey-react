import { CLOUDINARY_IMAGE_URL } from "../constants";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

const RestuarantCard = ({ id, name = '', avgRatingString = '', sla, cloudinaryImageId , cuisines }) => {
  return (
    <Link  to = {"resturant-menu/" + id}>
      <div className="card">
          <img src={CLOUDINARY_IMAGE_URL + (cloudinaryImageId ?? '') + "/"} />
          <h1>{name}</h1>
          <h2>{avgRatingString} Stars</h2>
          <h3>Time : {sla.slaString}</h3>
          <h4>{cuisines.join(", ")}</h4>
      </div>
    </Link>

  );
};
const RestuarantList = ({ resData, realData }) => {
  if (realData.length === 0) {
      return ( 
        <Shimmer/>
      )
  }
  return (
    <div className="restuarant-list">
      {resData.length === 0  ? <NotFound/>  : resData.map((cardData, index) => {
        return (
            <RestuarantCard {...cardData.info} key={cardData.info.id ?? index} />
        )
      })}
    </div>
  );
};

export default RestuarantList;
