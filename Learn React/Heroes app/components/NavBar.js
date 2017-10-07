import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link exac to="dashboard">Dashboard</Link>
      <Link exac to="heroes">Heroes</Link>
    </nav>
  )
}

export default NavBar;