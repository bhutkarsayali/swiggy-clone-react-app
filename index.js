import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Applayout from "./src/App";
import About from "./src/components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//below components are lazily loaded
// import Instamart from "./src/components/Instamart";
// import Cart from "./src/components/Cart";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";

//lazy loading Instamear and Cart component
const Instamart = lazy(() => import("./src/components/Instamart"));
const Cart = lazy(() => import("./src/components/Cart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout></Applayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Instamart is Loading...</h1>}>
            <Instamart></Instamart>
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Cart is Loading...</h1>}>
            <Cart></Cart>{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],
  },
]);
const react_root = ReactDOM.createRoot(document.getElementById("root"));
react_root.render(<RouterProvider router={appRouter}></RouterProvider>);
