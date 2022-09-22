import styled from "styled-components"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #fff;
  height: 5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
`
export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`
export const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #616161;
  text-decoration: none;
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000;
  }
`
