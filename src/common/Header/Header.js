import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <Link to="/">
        <h1 className="title">MoV</h1>
      </Link>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <Link className="nav-item" to="/movies">
            Movies
          </Link>
          <span className="separator"> | </span>
          <Link className="nav-item" to="/tv-shows">
            Tv Shows
          </Link>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
