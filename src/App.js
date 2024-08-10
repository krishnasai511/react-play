import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//best practive to have key is some uniqye id --> dont use indx as jey
// for now i kept it temporarily

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
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);

root.render(<AppLayout />);
