import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink className="nav-bar__link link" activeClassName="link_active" to="/dashboard">Dashboard</NavLink>
      <NavLink className="nav-bar__link link" activeClassName="link_active" to="/heroes">Heroes</NavLink>
    </nav>
  )
}

export default NavBar;