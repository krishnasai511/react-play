import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "heading 1");

// const div = React.createElement(
//   "div",
//   {
//     className: "title",
//   },
//   [
//     heading,
//     React.createElement("h2", {}, "heading 2"),
//     React.createElement("h3", {}, "heading 3"),
//   ]
// );
// console.log(div);

// using jsx

// const div = () => (
//   <div className="title">
//     <h1>headr 1 </h1>
//     <h2>header 2</h2>
//     <h3>header 3</h3>
//   </div>
// );

// const RenderJS = () => {
//   return div();
// };

const header = <h1>new heeader</h1>;

const div = (
  <div className="title">
    {header}
    <h1>headr 1 </h1>
    <h2>header 2</h2>
    <h3>header 3</h3>
  </div>
);

const div2 = (
  <div className="title">
    {header}
    <h1>headr 1 </h1>
    <h2>header 2</h2>
    <h3>header 3</h3>
  </div>
);

const RenderJS = () => {
  return <div>{div}</div>; // returning jsx elemet
};

// const div = (
//   <div className="title">
//     <h1>headr 1 </h1>
//     <h2>header 2</h2>
//     <h3>header 3</h3>
//   </div>
// );

// const RenderJS = () => {
//   return div; // if we use {div} we are returning object not jsx element, so check properly what we are returning
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);

root.render(<RenderJS />);
