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
import { useState } from "react";

const Header = () => {
  //custom hook to change online status
  const onlineStatus = useOnlineStatus();

  //toggle login-logout button
  const [btnName, setBtnName] = useState("Login");

  return (
    <Navbar fluid className="shadow-lg shadow-gray-300">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <img className="logo w-20" src={LOGO_URL} />
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="flex flex-wrap gap-8">
          <Avatar
            img={AVATAR_IMG}
            rounded
            status={onlineStatus ? "online" : "offline"}
            statusPosition="bottom-right"
          />
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
          <Link to={"/cart"} className="font-semibold">
            Cart
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/contact"} className="font-semibold">
            Contact
          </Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
