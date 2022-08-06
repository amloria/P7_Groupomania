import React from "react";
import "../styles/Form.css";

function Signup() {
  return (
    <main className="form-container">
      <form>
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
      </form>
    </main>
  );
}

export default Signup;
