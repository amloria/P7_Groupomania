import React from "react";
import "../styles/Form.css";
// import { Outlet, Link } from "react-router-dom";

// import Login from "./Login";

function Signup() {
  function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    // const userData = {
    //   name: data.get("name"),
    //   lastName: data.get("lastName"),
    //   email: data.get("email"),
    //   password: data.get("password"),
    // };

    // console.log(userData);

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
      <main className="form-container">
        <form className="form-signup" onSubmit={onSubmit}>
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
              name="lastName"
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
              name="password"
              id="password"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
            ></input>
          </div>
          <div>
            <button name="signup" type="submit" id="signup">
              S'inscrire
            </button>
          </div>
          {/* <div className="line">Déjà inscrit(e) ?</div>
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
          <Outlet />*/}
        </form>
      </main>
    </>
  );
}

export default Signup;
