import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100  hover:bg-lime-200">
      <img className="card-logo" src={CDN_URL + cloudinaryImageId} alt="logo" />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
