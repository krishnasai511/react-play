// this is one way --> but added a better way below
// import { useState } from "react";

// const Section = ({ title, description, isVisible, setIsVisible }) => {
//   // const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div className="border border-black m-2 p-2">
//       <h1 className="text-3xl font-bold">{title}</h1>
//       {!isVisible ? (
//         <button
//           className="bg-blue-300 shadow-lg rounded"
//           onClick={() => {
//             setIsVisible();
//           }}
//         >
//           Show
//         </button>
//       ) : (
//         <button
//           className="bg-blue-300 shadow-lg rounded"
//           onClick={() => {
//             setIsVisible("hide");
//           }}
//         >
//           Hide
//         </button>
//       )}

//       {isVisible && <p>{description}</p>}
//     </div>
//   );
// };

// const InstaMart = () => {
//   const [isVisibleSection, setIsVisbleSection] = useState("");

//   return (
//     <div>
//       <Section
//         title={"About"}
//         description={
//           "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
//         }
//         isVisible={isVisibleSection === "about"}
//         setIsVisible={(p) => {
//           console.log(p);
//           if (p === "hide") {
//             setIsVisbleSection("");
//           } else {
//             setIsVisbleSection("about");
//           }
//         }}
//       />
//       <Section
//         title={"Products"}
//         description={
//           "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
//         }
//         isVisible={isVisibleSection === "products"}
//         setIsVisible={() => {
//           setIsVisbleSection("products");
//         }}
//       />
//       <Section
//         title={"careers"}
//         description={
//           "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
//         }
//         isVisible={isVisibleSection === "careers"}
//         setIsVisible={() => {
//           setIsVisbleSection("careers");
//         }}
//       />
//     </div>
//   );
// };

// export default InstaMart;

import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black m-2 p-2">
      <h1 className="text-3xl font-bold">{title}</h1>

      <button
        className="bg-blue-300 shadow-lg rounded"
        onClick={() => {
          setIsVisible(isVisible);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [isVisibleSection, setIsVisbleSection] = useState("");

  return (
    <div>
      <Section
        title={"About"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={isVisibleSection === "about"}
        setIsVisible={(isvisible) => {
          console.log(isvisible);
          setIsVisbleSection(isvisible ? "" : "about");
        }}
      />
      <Section
        title={"Products"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={isVisibleSection === "products"}
        setIsVisible={(isvisible) => {
          setIsVisbleSection(isvisible ? "" : "products");
        }}
      />
      <Section
        title={"careers"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={isVisibleSection === "careers"}
        setIsVisible={(isvisible) => {
          setIsVisbleSection(isvisible ? "" : "careers");
        }}
      />
    </div>
  );
};

export default InstaMart;
