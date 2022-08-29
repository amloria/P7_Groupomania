import React from "react";
import "../styles/Form.css";
import { Outlet, Link } from "react-router-dom";

import Banner from "./Banner";
import Signup from "./Signup";
import Footer from "./Footer";

function Login() {
  function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function(apiData) {
        if (apiData.ok) {
          return apiData.json();
        }
      })
      .then(() => {
        document.location.replace(`./feed`);
      })
      .catch(function(err) {
        console.error(`Retour du serveur : ${err}`);
      });
  }

  return (
    <>
      <div className="main-container">
      <Banner />
      <main className="form-container">
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Adresse e-mail"
              aria-label="Adresse e-mail"
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
            ></input>
          </div>
          <div>
            <button name="login" type="submit" id="login">
              S'identifier
            </button>
          </div>
          <div className="line">Première visite sur l'app ?</div>
          <div>
            <Link to="/signup" element={<Signup />}>
              <button
                className="btn-signup"
                name="signup"
                type="button"
                id="buttonSignup"
              >
                Inscrivez-vous
              </button>
            </Link>
          </div> 
          <Outlet />
        </form>
      </main>
      </div>
      <Footer />
    </>
  );
}

export default Login;
