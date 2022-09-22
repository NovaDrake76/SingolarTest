import React from "react"
import { Nav, Logo, NavLink, NavLinks } from "./styles"

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">SingolarTest</Logo>
      <NavLinks>
        <NavLink to="/createPost">Create Post</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
