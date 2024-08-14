import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import userContext from "../utils/userContext";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const { user } = useContext(userContext);

  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100  hover:bg-lime-200">
      <img className="card-logo" src={CDN_URL + cloudinaryImageId} alt="logo" />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h1 className="font-bold text-3xl">{user.name}</h1>
    </div>
  );
};

export default RestaurantCard;
