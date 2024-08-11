import { useEffect, useState } from "react";
import { restrauntsList } from "./constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestraunts, setallRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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

  if (!allRestraunts) return null;

  return allRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
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
        <div className="restaurant-list">
          {restaurants.map((res, index) => {
            return <RestaurantCard {...res.info} key={res.info?.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;
