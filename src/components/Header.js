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

const Header = () => {
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
            status="away"
            statusPosition="bottom-right"
          />
          <Button color="failure">LogIn</Button>
        </div>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active>
        <Link to={"/"}>Home</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/about"}>About Us</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/instamart"}>Instamart</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/cart"}>Cart</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to={"/contact"}>Contact</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
