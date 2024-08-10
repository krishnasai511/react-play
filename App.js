import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.googleusercontent.com/ytc/AIdro_khDPXdl1ezbGnSrhNWw09nCQDdpcWXF8QnV-1xCcbYng=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const HeaderComponent = () => {
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

const restraunts = [
  {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "ChickFill A",
    cuisine: ["American", "Chicken"],
    rating: 4.5,
  },
  {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "ChickFill A",
    cuisine: ["American", "Chicken"],
    rating: 4.5,
  },
  {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "ChickFill A",
    cuisine: ["American", "Chicken"],
    rating: 4.5,
  },
  {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
    name: "ChickFill A",
    cuisine: ["American", "Chicken"],
    rating: 4.5,
  },
];

const RestaurantCard = ({ restro }) => {
  console.log(restro);
  return (
    <div className="card">
      <img src={restro.img} alt="logo" />
      <h2>{restro.name}</h2>
      <h3>{restro.cuisine.join(",")}</h3>
      <h4>{restro.rating} stars</h4>
    </div>
  );
};

//best practive to have key is some uniqye id --> dont use indx as jey
// for now i kept it temporarily
const Body = () => {
  return (
    <div className="restaurant-list">
      {restraunts.map((res, index) => {
        return <RestaurantCard restro={res} key={index} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      {/** header
       *      logo
       *       list items --> about us contact login...
       *        cart
       * body
       *    search bar
       *    restaurant list
       *      -Restaurant
       *        name
       *        cusine rating
       *        image
       * footer
       *      reference links
       *      copyright
       */}
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);

root.render(<AppLayout />);
