import React, { useState } from "react";

import "../styles/Article.css";

function Article(article) {
  const [comment, setComment] = useState(false);
  const [options, setOptions] = useState(false);

  return (
    <>
      <article className="article-post">
        <div className="article-top">
          <img
            src={article.user.profilePicture}
            className="user-avatar"
            alt=""
          />
          <div className="post-top-center">
            <span className="user-name">
              {article.user.name} {article.user.lastName}
            </span>
            <div className="articleDate">
              Posté le {article.date.split("T").join(" à ").substring(0, 18)} hs
            </div>
          </div>
          {options !== false ? (
            <>
              <i
                className="post-options fa-solid fa-ellipsis"
                onClick={() => {
                  setOptions(false);
                }}
              ></i>
              <div className="edit-delete">
                <button>Modifier</button>
                <button>Supprimer</button>
              </div>
            </>
          ) : (
            <i
              className="post-options fa-solid fa-ellipsis"
              onClick={() => {
                setOptions(true);
              }}
            ></i>
          )}
        </div>
        <h3 className="post-description">{article.description}</h3>
        <img src={article.imageUrl} className="img-post" alt="" />
        <div className="post-icons">
          <i className="fa-regular fa-lg fa-thumbs-up"></i>
          <span>{article.likes}</span>
          <i
            className="fa-regular fa-lg fa-comment"
            onClick={() => {
              setComment(true);
            }}
          ></i>
          <span>{article.comments}</span>
          <i className="fa-regular fa-lg fa-paper-plane"></i>
        </div>
        {comment !== false ? (
          <div className="post-comment">
            <i className="face-smile fa-regular fa-lg fa-face-smile-beam"></i>
            <input
              className="create-comment"
              placeholder="Ajouter un commentaire..."
              aria-label="Ajouter un commentaire"
              type="text"
            ></input>
            <i className="arrow-up fa-solid fa-lg fa-circle-arrow-up"></i>
          </div>
        ) : null}
      </article>
    </>
  );
}

export default Article;
