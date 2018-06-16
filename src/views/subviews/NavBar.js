import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import logo from '../../icons/icon-primary-rounded.svg';
import NavLink from "../elems/NavLink";
import Icon from "../elems/Icon";
import {Link} from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: false,
      theme: props.theme || "light",
      active: props.active || "home"
    };
    this.navbarToggle = this.navbarToggle.bind(this);
  }

  navbarToggle() {
    this.setState(prevState => ({
      navCollapsed: !prevState.navCollapsed
    }))
  }

  render() {
    return (
      <Navbar color={this.state.theme} className={"navbar-"+this.state.theme} expand="sm">
        <Link to="/home" className="navbar-brand">
          <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt=""/>
          Apothem
        </Link>
        <NavbarToggler onClick={this.navbarToggle}/>
        <Collapse isOpen={this.state.navCollapsed} navbar>
          <Nav navbar>
            <NavItem active={this.state.active === "home"}><NavLink to="/home"><Icon name="home"/>Home</NavLink></NavItem>
            <NavItem active={this.state.active === "mail"}><NavLink to="/mail"><Icon name="envelope-closed"/>Mail</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;