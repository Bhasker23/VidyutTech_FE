import React from "react";
import "./cssFile/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbarDiv">
      <h3 style={{ marginLeft: "10px" }}>VidyutTech</h3>
      <nav className="nav">
        <Link className="navLink" to={"/home"}>
          Home
        </Link>
        <Link className="navLink" to={"/login"}>
          Login
        </Link>
        <Link className="navLink" to={"/About"}>
          About
        </Link>
        <Link className="navLink" to={"/userfeature"}>
          User Features
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
