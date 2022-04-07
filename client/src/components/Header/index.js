import React from "react";
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";
import '../../index.css';

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  // Auth.logout();
  // };
  return (
    <header >
      <div >
      <Link style={{ textDecoration: 'none' }} to="/">
        <h1>OCSS Medical Records Cloud</h1>
      </Link>
      
      <nav>
        <Link style={{ textDecoration: 'none' }} to="/about">About Us</Link>
        <Link style={{ textDecoration: 'none' }} to="/login">Login</Link>
        <Link style={{ textDecoration: 'none' }} to="/signup">Signup</Link>
      </nav>
    </div>
  </header>
  );
};

export default Header;
