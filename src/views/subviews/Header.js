import React from 'react';
import logo from '../../icons/icon-dark-rounded.svg';
import "../../SCSS/Header.css";
import LoginNavBar from "./LoginNavBar";

function Header(props) {
  return (
    <header className="header bg-dark">
      <img src={logo} className="logo" alt="logo"/>
      <h4>Welcome to Apothem</h4>
      <LoginNavBar active={props.active}/>
    </header>
  );
}

export default Header;