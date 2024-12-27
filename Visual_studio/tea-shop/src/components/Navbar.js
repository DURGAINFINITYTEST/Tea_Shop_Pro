import React from "react";
import "./Navbar.css";
import chaiImage from "./chai.png";

const Navbar = ({ cartTotal }) => {
  return (
    <nav className="navbar">
      <img src={chaiImage} alt="Tea Shop Logo" className="logo" />
      <div id="p6">My Cart: ₹{cartTotal}</div>
    </nav>
  );
};

export default Navbar

