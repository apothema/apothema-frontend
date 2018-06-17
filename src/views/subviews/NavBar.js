import React, {Component} from 'react';
import {Button, Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import logo from '../../icons/icon-primary-rounded.svg';
import NavLink from "../elems/NavLink";
import Icon from "../elems/Icon";
import {Link} from "react-router-dom";
import {ThemeContext} from "../contexts/ThemeContext";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: false,
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
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <Navbar color={theme} className={"navbar-"+theme} expand="sm">
            <Link to="/home" className="navbar-brand">
              <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt=""/>
              Apothem
            </Link>
            <NavbarToggler onClick={this.navbarToggle}/>
            <Collapse isOpen={this.state.navCollapsed} navbar>
              <Nav navbar className="mr-auto">
                <NavItem active={this.state.active === "home"}><NavLink to="/home"><Icon name="home"/>Home</NavLink></NavItem>
                <NavItem active={this.state.active === "mail"}><NavLink to="/mail"><Icon name="envelope-closed"/>Mail</NavLink></NavItem>
              </Nav>
              <Button color="success" onClick={toggleTheme}>Change theme</Button>
            </Collapse>
          </Navbar>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default NavBar;