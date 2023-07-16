import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/$wagGorilla.jpg";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
            <Link to="/home">
                <img src={Logo} alt="" />
            </Link>
        </div>
        <div className="links">
            <Link className="link" to="/home">
                <h6>Home</h6>
            </Link>
            <Link className="link" to="/sets">
                <h6>Sets</h6>
            </Link>
            <Link className="link" to="/write">
                <h6>Add</h6>
            </Link>
            <span className="username">{currentUser?.username}</span>
            <span className="logout" onClick={handleLogout}>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;