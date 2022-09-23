import React, { useState } from "react";
import "../styles/Form.css";
import { useNavigate, Outlet, Link } from "react-router-dom";

import Banner from "./Banner";
import Login from "./Login";
import Footer from "./Footer";

function Signup() {
  let navigate = useNavigate();

  const [error, setError] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        name: data.get("name"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (apiData) {
        if (apiData.ok) {
          return apiData.json();
        }
      })
      .then(() => {
        navigate("/login", { replace: true });
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`);
        setError(true);
      });
  }

  return (
    <>
      <div className="main-container">
        <Banner />
        <main className="form-container">
          <form className="form-signup" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Prénom"
                aria-label="Prénom"
                required
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Nom de famille"
                aria-label="Nom de famille"
                required
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Adresse e-mail"
                aria-label="Adresse e-mail"
                required
              ></input>
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                aria-label="Mot de passe"
                required
              ></input>
            </div>
            <div>
              <button name="signup" type="submit" id="signup">
                S'inscrire
              </button>
              {error ? (
                <div className="auth-error">
                  <h4>
                    Veuillez vérifier les éléments suivants et réessayer :
                  </h4>
                  <span>
                    L'adresse e-mail contient le symbole "@". Le mot de passe
                    contient au moins une lettre majuscule, deux chiffres et un
                    total de huit caractères
                  </span>
                </div>
              ) : null}
            </div>
            <div className="line">Déjà inscrit(e) ?</div>
            <div>
              <Link to="/login" element={<Login />}>
                <button
                  className="btn-signup"
                  name="signup"
                  type="button"
                  id="buttonSignup"
                >
                  Identifiez-vous
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

export default Signup;
