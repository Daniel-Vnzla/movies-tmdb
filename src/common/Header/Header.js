import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Search from "../../components/Search/Search.js";

const Header = () => {
  return (
    <header className="header container">
      <Link to="/">
        <h1 className="title">MoV</h1>
      </Link>
        <Search />
    </header>
  );
};

export default Header;
