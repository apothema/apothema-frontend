import React from 'react';
import {Collapse, Nav, Navbar, NavItem} from "reactstrap";
import NavLink from "../elems/NavLink";

function LoginNavBar(props) {
  const active = props.active || "login";
  return (
    <Navbar dark expand="xs" color="dark">
      <Collapse isOpen navbar>
        <Nav navbar className="mx-auto">
          <NavItem active={active === "login"}><NavLink to="/login">Login</NavLink></NavItem>
          <NavItem active={active === "devs"}><NavLink to="/devs">Developers</NavLink></NavItem>
          <NavItem active={active === "about"}><NavLink to="/about">About</NavLink></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default LoginNavBar;