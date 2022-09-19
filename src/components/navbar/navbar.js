import React from "react";
import { Nav, Logo, NavLink, NavLinks, Button } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">SingolarTest</Logo>
      <NavLinks>
        <NavLink to="/createPost">Create Post</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <Button>Logout</Button>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
