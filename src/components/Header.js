import { useContext, useState } from "react";
import { IMG_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import themeContext from "../utils/themeContext";
import { useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice";

const loggedinUser = () => {
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={IMG_LOGO} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { themeColor, setThemeColor } = useContext(themeContext);

  const user = useContext(userContext);
  console.log("user from header-->", user);

  console.log("render", isLoggedIn);

  const cartItems = useSelector((store) => store.cart.items);

  console.log("Cart--->", cartItems);

  return (
    <div className="flex flex-col bg-pink-100 shadow-lg items-center justify-between md:flex-row">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li className="px-2">Cart - {cartItems?.length} items</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      <button
        className="bg-blue-100 rounded p-2 m-5"
        onClick={() => {
          console.log(themeColor.color);
          setThemeColor({
            color: themeColor.color === "black" ? "white" : "black",
          });
        }}
      >
        ChangeTheme
      </button>
    </div>
  );
};

export default Header;
