import React from "react";
import ReactDOM from "react-dom/client";
import Applayout from "./src/App";
import About from "./src/components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Instamart from "./src/components/Instamart";
import Cart from "./src/components/Cart";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout></Applayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/instamart",
                element: <Instamart></Instamart>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
        ]
    },
]);
const react_root = ReactDOM.createRoot(document.getElementById("root"));
react_root.render(<RouterProvider router={appRouter}></RouterProvider>);
