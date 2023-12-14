import React from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Shimmer from "./components/Shimmer";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      <Flowbite>
        <DarkThemeToggle className="fixed left-4 top-36" />
        <Header></Header>
        <Outlet></Outlet>
        <FooterComp></FooterComp>
      </Flowbite>
    </div>
  );
};

export default Applayout;
