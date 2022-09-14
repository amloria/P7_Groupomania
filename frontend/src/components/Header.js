import React from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

import "../styles/Header.css";
import logo from "../assets/icon-left-font.png";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

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
            <button className="logout" onClick={logout}>
              <i
                className="fa-solid fa-lg fa-arrow-right-from-bracket"
                title="Se déconnecter"
              ></i>
            </button>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
