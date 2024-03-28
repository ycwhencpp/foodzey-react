import { CLOUDINARY_IMAGE_URL } from "../constants";

const RestuarantCard = ({ name, avgRatingString, sla, cloudinaryImageId, cuisines }) => {
  return (
    <div className="card">
      <img src={CLOUDINARY_IMAGE_URL + cloudinaryImageId + "/"} />
      <h1>{name}</h1>
      <h2>{avgRatingString} Stars</h2>
      <h3>Time : {sla.slaString}</h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
const RestuarantList = ({ resData }) => {
  console.log(resData);
  return (
    <div className="restuarant-list">
      {resData.map((cardData, index) => {
        return <RestuarantCard {...cardData.info} key={cardData.info.id} />;
      })}
    </div>
  );
};

export default RestuarantList;
