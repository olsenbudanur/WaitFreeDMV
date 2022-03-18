import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <NavLink to='/'>
            Home
          </NavLink>
        </div>
      </nav>
    </>
  );
};
  
export default Navbar;