import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { CDN_URL, CORS_PROXY_URL, MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestroMenu = () => {
  const params = useParams();

  console.log("I go the param", params);

  const [restroInfo, setRestroInfo] = useState(null);
  const [menuDetails, setMenuDetails] = useState([]);

  const dispatch = useDispatch();

  function handleCartAddItem(item) {
    dispatch(addItem(item));
  }

  function handleCartRemoveItem(item) {
    dispatch(removeItem());
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log("inside");
    const data = await fetch(CORS_PROXY_URL + MENU_API + params.id);
    const jsonData = await data.json();
    console.log("menu json data->", jsonData);
    setRestroInfo(jsonData?.data?.cards[2]?.card?.card?.info);
    parseMenuDetails(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  function parseMenuDetails(cards) {
    let menuItemCategories = [];
    cards.map((card) => {
      if (card?.card?.card.hasOwnProperty("itemCards")) {
        menuItemCategories.push(card?.card?.card.itemCards);
      }
    });

    let menuItemsComplete = [];

    console.log(menuItemCategories);
    menuItemCategories.map((cards) => {
      let itemStructure = {
        id: cards[0].card.info.id,
        category: cards[0].card.info.category,
        items: [],
      };
      cards.map((card) => {
        // console.log("final", card.card.info);
        let { name, defaultPrice } = card?.card?.info;
        itemStructure.items.push({ name, defaultPrice });
      });
      menuItemsComplete.push(itemStructure);
    });
    console.log(menuItemsComplete);
    setMenuDetails(menuItemsComplete);
  }

  return !restroInfo ? (
    <Shimmer />
  ) : (
    <div className="restro-info">
      <div>
        {/* <h1>Restaurant id: {params.id}</h1> */}
        <h1>{restroInfo.name}</h1>
        <img
          src={CDN_URL + restroInfo.cloudinaryImageId}
          alt={restroInfo.name}
        />
        <p>City: {restroInfo.city}</p>
        <p>CostForTwo:{restroInfo.costForTwo}</p>
        <p>Rating: {restroInfo.avgRating} stars</p>
      </div>
      {menuDetails.length > 1 && (
        <div data-testid="menu-list">
          <h1>---------MENU---------</h1>
          {menuDetails.map((menuC, index) => {
            return (
              <div>
                <h1>{menuC.category}</h1>
                {menuC?.items.map((item) => {
                  return (
                    <>
                      <p>{item.name}</p>
                      {item.defaultPrice && (
                        <p>Price: {item.defaultPrice / 100}</p>
                      )}
                      <button
                        data-testId="btn-add"
                        className="bg-green-200 text-black font-bold text-3xl m-2"
                        onClick={() => handleCartAddItem(item)}
                      >
                        +
                      </button>

                      <button
                        className="bg-green-200 text-black font-bold text-3xl m-2"
                        onClick={() => handleCartRemoveItem()}
                      >
                        -
                      </button>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestroMenu;
