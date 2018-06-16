import React from 'react';
import logo from '../../icons/icon-dark-rounded.svg';

const Header = () => (
  <header className="header">
    <img src={logo} className="logo" alt="logo"/>
    <h4>Welcome to Apothem</h4>
  </header>
);

export default Header;