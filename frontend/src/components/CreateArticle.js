import React from "react";

import "../styles/CreateArticle.css";

function CreateArticle() {
  return (
    <>
      <div className="new-post">
        <div>
          <a href="#" className="user-avatar">
            AV
          </a>
          <button
            className="create-post"
            title="Créer une nouvelle publication"
          >
            <span>Salut "Nom Utilisateur", quoi de neuf ?</span>
            <i className="fa-regular fa-lg fa-image"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
