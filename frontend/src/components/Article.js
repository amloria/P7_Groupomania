import React from "react";

import "../styles/Article.css";

function Article(article) {
  return (
    <>
      <article className="article-post">
        <div className="article-top">
          <a href="#" className="user-avatar">
            AV
          </a>
          <div className="post-top-center">
            <span className="user-name">
              {article.user.name} {article.user.lastName}
            </span>
            <div className="articleDate">Posté le {article.date}</div>
          </div>
          <i className="post-options fa-solid fa-ellipsis"></i>
        </div>
        <h3 className="post-description">{article.description}</h3>
        <img src={article.imageUrl} className="img-post" alt="" />
        <div className="post-icons">
          <i className="fa-regular fa-lg fa-thumbs-up"></i>
          <span>{article.likes}</span>
          <i className="fa-regular fa-lg fa-comment"></i>
          <span>{article.comments}</span>
          <i className="fa-regular fa-lg fa-paper-plane"></i>
        </div>
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
      </article>
    </>
  );
}

export default Article;