import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import InstaMart from "./components/InstaMart";
import userContext from "./utils/userContext";
import themeContext from "./utils/themeContext";
import { themes } from "./utils/themeContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "krishna",
    email: "dnksndkfs@kfsgnsk.com",
  });

  const [themeColor, setThemeColor] = useState({ color: "black" });
  // const [user, setUser] = useState("somethinf");

  // here if we write useEffect and update state  then all components will re-render with new user

  return (
    <>
      <Provider store={store}>
        <themeContext.Provider value={{ themeColor, setThemeColor }}>
          <userContext.Provider value={{ user: user, setUser: setUser }}>
            <Header />
            <Outlet />
            <Footer />
          </userContext.Provider>
        </themeContext.Provider>
      </Provider>
    </>
  );
};

//lazy import

const InstaMart = lazy(() => import("./components/InstaMart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile" /**
            relative path--> dont write as /profile as react will consider it as localhost:1234/profile
            this is what happens in actual --> parentPath/{path}
             */,
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:id",
        element: <RestroMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
