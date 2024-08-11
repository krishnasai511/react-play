import { useState } from "react";
import { IMG_LOGO } from "./constant";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
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
