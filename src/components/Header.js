import { IMG_LOGO } from "./constant";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={IMG_LOGO} />
    </a>
  );
};

const Header = () => {
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
    </div>
  );
};

export default Header;
