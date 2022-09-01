import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/Header.css";
import logo from "../assets/icon-left-font.png";

function Header() {
  return (
    <>
      <header>
        <nav className="header-nav">
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
          <div className="header-logout">
            <Link to="/">
              {/* <i className="fa-solid fa-lg fa-power-off"></i> */}
              {/* <i className="fa-regular fa-lg fa-circle-user"></i> */}
              <i className="fa-solid fa-lg fa-arrow-right-from-bracket" title="Se déconnecter"></i>
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
