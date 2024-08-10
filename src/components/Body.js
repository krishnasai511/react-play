import { useState } from "react";
import { restrauntsList } from "./constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let filteredRes = [];
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restrauntsList);

  return (
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
              restrauntsList.filter((res) =>
                res.name.toLowerCase().includes(searchInput)
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((res, index) => {
          return <RestaurantCard restro={res} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
