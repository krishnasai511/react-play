import { useContext, useEffect, useState } from "react";
import { CORS_PROXY_URL, restrauntsList } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import themeContext from "../utils/themeContext";
const Body = () => {
  const [allRestraunts, setallRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const { user, setUser } = useContext(userContext);

  const { themeColor } = useContext(themeContext);

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      CORS_PROXY_URL +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("rest-->", jsonData);
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

  console.log("set theme color body--->", themeColor);

  return allRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {/* <h1>{themeColor.color}</h1>  */}
      {/* <div className={`py-5 m-2 bg-${themeColor?.color}`}>
       * Even though the color updates tailwind cannot take colors dynamically
       * because when tailwind compiles to css it looks over the code and see if it can find any class
       * with that name
       *
       * We can use something called tailwind safelists in tailwing config file, if we want to add any specific classes
       *
       * Tailwind doc
       * Safelisting is a last-resort, and should only be used in situations where it’s impossible to scan certain content for class names.
       * These situations are rare, and you should almost never need this feature.
       *If you need to make sure Tailwind generates certain class names that don’t exist in your content files,
       * use the safelist option:
       */}
      <div className={`py-5 m-2 bg-${themeColor?.color}`}>
        <input
          type="text"
          placeholder="Search item"
          className="search-input"
          data-testid="input"
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
          data-testid="search-btn"
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
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            console.log(e.target.value);
            setUser({ ...user, name: e.target.value });
          }}
        />
      </div>
      {restaurants.length === 0 ? (
        <h1>No restaurant found!!</h1>
      ) : (
        <div className="flex flex-wrap" data-testid="res-list">
          {restaurants.map((res, index) => {
            return (
              <Link to={"/restuarant/" + res.info?.id} key={res.info?.id}>
                <RestaurantCard {...res.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
