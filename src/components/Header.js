import {
  Avatar,
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { AVATAR_IMG, LOGO_URL } from "../utils/constants/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom-hooks/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "./../utils/global-context/UserContext";
import { useSelector } from "react-redux";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  //custom hook to change online status
  const onlineStatus = useOnlineStatus();
  const dataFromGlobalContext = useContext(UserContext);

  //toggle login-logout button
  const [btnName, setBtnName] = useState("Login");

  //subscribe to appstore
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <Navbar fluid className="shadow-lg shadow-gray-300">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <img className="logo w-20" src={LOGO_URL} />
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar
            img={AVATAR_IMG}
            rounded
            status={onlineStatus ? "online" : "offline"}
            statusPosition="bottom-right"
            className="shadow-md rounded-full shadow-black dark:shadow-white"
          />
          <span className="dark:text-white">
            {dataFromGlobalContext.loggedInUser}
          </span>
          <Button
            color={btnName == "Login" ? "failure" : "success"}
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </Button>
        </div>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active>
          <Link to={"/"} className="font-semibold">
            Home
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/about"} className="font-semibold">
            About Us
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/instamart"} className="font-semibold">
            Instamart
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/contact"} className="font-semibold">
            Contact
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/cart"} className="font-semibold relative">
            <BsCartFill className="h-5 w-5" />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
              {cartItems.length}
            </div>
          </Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
