import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/Header.css";
import logo from "../assets/icon-left-font.png";

function Header() {
  return (
    <>
      <header className="header-nav">
        <div className="header-logo-search">
          <Link to="/feed">
            <img src={logo} className="header-logo" alt="Logo Groupomania" />
          </Link>
        </div>
        <div>
          <input
            className="header-search"
            placeholder="Rechercher"
            aria-label="Rechercher"
            type="text"
          ></input>
        </div>
        <div className="header-profile">
          <Link to="/profile">Profil</Link>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
