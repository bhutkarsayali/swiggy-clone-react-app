import React, { useEffect, useState } from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Shimmer from "./components/Shimmer";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/global-context/UserContext";
import { Provider } from "react-redux";
import { GITHUB_PROFILE_INFO_API } from "./utils/constants/constants";
import AppStore from "./utils/redux-utils/AppStore";

const Applayout = () => {
  //authentication code for login user
  const [userName, setUserName] = useState();

  useEffect(() => {
    FetchUserInfo();
  }, []);

  const FetchUserInfo = async () => {
    const userData = await fetch(GITHUB_PROFILE_INFO_API);
    const json = await userData.json();
    console.log(json);
    setUserName(json.login);
  };

  return (
    <div>
      <Provider store={AppStore}>
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Flowbite>
            <DarkThemeToggle className="fixed left-4 top-36" />
            <Header></Header>
            <Outlet></Outlet>
            <FooterComp></FooterComp>
          </Flowbite>
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default Applayout;
