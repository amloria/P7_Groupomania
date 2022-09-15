import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Article.css";

function Article(article) {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const [comment, setComment] = useState(false);
  const [options, setOptions] = useState(false);

  const onEdit = () => {
    axios
      .put(`http://localhost:3000/api/articles/${article.postRef}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        refreshPage();
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`);
      });
  };

  const onDelete = () => {
    axios
      .delete(`http://localhost:3000/api/articles/${article.postRef}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        refreshPage();
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`);
      });
  };

  return (
    <>
      <article className="article-post">
        <div className="article-top">
          <img
            src="{article.user.profilePicture}"
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
            <div>
              <i
                className="post-options fa-solid fa-ellipsis"
                onClick={() => {
                  setOptions(false);
                }}
              ></i>
              <div className="edit-delete">
                <button
                  onClick={() => {
                    onEdit();
                  }}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onDelete();
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>
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
