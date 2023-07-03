import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/$wagGorilla.jpg";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
        </div>
        <div className="links">
            <Link className="link" to="/">
                <h6>Home</h6>
            </Link>
            <Link className="link" to="/sets">
                <h6>Sets</h6>
            </Link>
            <Link className="link" to="/write">
                <h6>Add</h6>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;