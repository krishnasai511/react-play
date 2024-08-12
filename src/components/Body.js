import { useEffect, useState } from "react";
import { CORS_PROXY_URL, restrauntsList } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [allRestraunts, setallRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      CORS_PROXY_URL +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setallRestraunts(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurants(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  const online = useOnline();

  if (!online) {
    return <h1>😯 Offline please check internet!</h1>;
  }

  if (!allRestraunts) return null;

  return allRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="py-5 bg-purple-100 m-2">
        <input
          type="text"
          placeholder="Search item"
          className="search-input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            console.log("i am inside");
            /**
             * The unexpected results in your code are happening because you're using searchInput to
             * filter the restaurants list inside the onChange handler,
             *  but you are using the searchInput value before it has been updated.
             * In React, state updates are asynchronous, so the searchInput value
             * inside your onChange function is still the old value when you attempt to filter the list.
             *
             * Solution:
             * use direct e.target.value
             * or use this function outside onchange
             */
            // setRestaurants(
            //   restrauntsList.filter((res) =>
            //     res.name.toLowerCase().includes(searchInput)
            //   )
            // );
          }}
        />
        <button
          className="m-2 p-2 bg-orange-400 text-white rounded-md"
          onClick={() => {
            // filer from the restuarants and update the state
            // console.log(
            //   "upd",
            //   restaurants.filter((res) =>
            //     res.name.toLowerCase().includes(searchInput)
            //   )
            // );
            setRestaurants(
              allRestraunts.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchInput?.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      {restaurants.length === 0 ? (
        <h1>No restaurant found!!</h1>
      ) : (
        <div className="flex flex-wrap">
          {restaurants.map((res, index) => {
            return (
              <Link to={"/restuarant/" + res.info?.id} key={res.info?.id}>
                <RestaurantCard {...res.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
