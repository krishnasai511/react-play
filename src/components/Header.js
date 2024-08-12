import { useState } from "react";
import { IMG_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

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

  console.log("render", isLoggedIn);

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
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/instamart">InstaMart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
