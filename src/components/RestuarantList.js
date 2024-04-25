import { CLOUDINARY_IMAGE_URL } from "../constants";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

const RestuarantCard = ({ id, name = '', avgRatingString = '', sla, cloudinaryImageId , cuisines }) => {
  return (
    <Link  to = {"resturant-menu/" + id} >
      <div className="card w-[250px] border-2 border-violet-600 p-3 rounded-md bg-white">
          <img src={CLOUDINARY_IMAGE_URL + (cloudinaryImageId ?? '') + "/"} />
          <h1 className="font-bold text-xl pt-2" >{name}</h1>
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
    <div data-testid="res-list" className="flex flex-wrap gap-5 bg-pink-100">
      {resData.length === 0  ? <NotFound/>  : resData.map((cardData, index) => {
        return (
            <RestuarantCard {...cardData.info} key={cardData.info.id ?? index} />
        )
      })}
    </div>
  );
};

export default RestuarantList;
