import React from "react";
import "../styles/Form.css";
// import { Outlet, Link } from "react-router-dom";

// import Signup from "./Signup";

function Login() {
  return (
    <>
      <main className="form-container">
        <form>
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
          {/* <div className="line">Première visite sur l'app ?</div>
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
          <Outlet />*/}
        </form>
      </main>
    </>
  );
}

export default Login;
