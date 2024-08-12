import { useState } from "react";
import { IMG_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const loggedinUser = () => {
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={IMG_LOGO} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("render", isLoggedIn);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
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
