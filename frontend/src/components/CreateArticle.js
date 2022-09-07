import React, { useState } from "react";

import "../styles/CreateArticle.css";

function CreateArticle() {
  const [newArticle, setNewArticle] = useState(false);

  return newArticle ? (
    <div className="new-post">
      <div>
        <a href="#" className="user-avatar">
          AV
        </a>
        <button
          className="create-post"
          title="Créer une nouvelle publication"
          onClick={() => setNewArticle(false)}
        >
          <span>Salut, quoi de neuf ?</span>
          <i className="fa-regular fa-lg fa-image"></i>
        </button>
      </div>
    </div>
  ) : (
    <div className="new-post-container">
      <div className="container-top">
        <h2>Créer une publication</h2>
        <button className="cancel-post" onClick={() => setNewArticle(true)}>
          <i className="fa-solid fa-lg fa-xmark"></i>
        </button>
      </div>
      <div className="container-user">
        <a href="#" className="user-avatar">
          AV
        </a>
        <span className="user-name">User</span>
      </div>
      <form className="new-post-form">
        <div>
          <div className="new-post-description">
            <input
              className="create-comment"
              name="description"
              id="post-description"
              placeholder="Ajouter une description..."
              aria-label="Ajouter une description"
              type="text"
            ></input>
          </div>
        </div>
        <div className="container-bottom">
          <div className="add-content">
            <i
              className="face-smile fa-regular fa-lg fa-face-smile-beam"
              title="Ajouter des emojis"
            ></i>
            <label for="file">
              <i
                className="add-image fa-regular fa-lg fa-image"
                title="Ajouter une image"
              ></i>
            </label>
            <input
              id="file"
              className="input-image"
              type="file"
              accept="image/jpeg, image/jpg, image/png"
            ></input>
          </div>
          <button className="share-post">Publier</button>
        </div>
      </form>
    </div>
  );
}

export default CreateArticle;
