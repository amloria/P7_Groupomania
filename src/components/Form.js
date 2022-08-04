import "../styles/Form.css";

function Form() {
  return (
    <div className="form-container">
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
            name="pass"
            id="pass"
            placeholder="Mot de passe"
            aria-label="Mot de passe"
          ></input>
        </div>
        <div>
          <button name="login" type="submit" id="">
            S'identifier
          </button>
        </div>
        <div className="line">Première visite sur l'app ?</div>
        <div>
          <button className="btn-signup" name="login" type="submit" id="">
          Inscrivez-vous
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
