import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/Form.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Signup() {
  return (
    <Router>
      <main className="form-container blur">
        <form className="form-signup">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Prénom"
              aria-label="Prénom"
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="lasName"
              id="lastName"
              placeholder="Nom de famille"
              aria-label="Nom de famille"
            ></input>
          </div>
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
              name="pass"
              id="pass"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
            ></input>
          </div>
          <div>
            <button name="signup" type="submit" id="signup">
              S'inscrire
            </button>
          </div>
          <div className="line">Déjà inscrit(e) ?</div>
          <div>
            <Link to="/login">
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
        </form>
      </main>
    </Router>
  );
}

export default Signup;
