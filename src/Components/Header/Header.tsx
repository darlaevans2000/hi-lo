import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <NavLink to="/hi-lo" className="header-link">
      <header className="header">
        <h1>hi-lo weather ☀️</h1>
      </header>
    </NavLink>
  );
};

export default Header;
