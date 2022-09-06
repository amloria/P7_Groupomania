import React from "react";

import "../styles/CreateArticle.css";

function CreateArticle() {
  function formArticle() {
    return (
      <div className="new-post">
        <div>
          <a href="#" className="user-avatar">
            AV
          </a>
          <form>
            <input
              type="text"
              className="create-post"
              placeholder="Description..."
            >
              <input>
                <i className="fa-regular fa-lg fa-image"></i>
              </input>
            </input>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <div className="new-post">
        <div>
          <a href="#" className="user-avatar">
            AV
          </a>
          <button
            className="create-post"
            title="Créer une nouvelle publication"
            onClick={formArticle}
          >
            <span>Salut, quoi de neuf ?</span>
            <i className="fa-regular fa-lg fa-image"></i>
          </button>
        </div>
      </div> */}
      <div className="new-post-container">
        <div className="container-top">
          <h2>Créer une publication</h2>
          <i className="cancel-post fa-solid fa-lg fa-xmark"></i>
        </div>
        <div className="container-user">
          <a href="#" className="user-avatar">
              AV
          </a>
          <span className="user-name">
                User
          </span>
        </div>      
        <form className="new-post-form">
          <div>
            <div className="new-post-description">
              <input
                className="create-comment"
                placeholder="Ajouter une description..."
                aria-label="Ajouter une description"
                type="text"
              ></input>
            </div>
          </div>
          <div className="container-bottom">
            <div className="add-image" title="Ajouter une image">
              <i className="fa-regular fa-lg fa-image"></i>
            </div>
            <button className="share-post">Créer</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateArticle;
