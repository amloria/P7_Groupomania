import React from "react";

import "../styles/Feed.css";

import Header from "../components/Header";
import CreateArticle from "../components/CreateArticle"
import Article from "../components/Article";
import Footer from "../components/Footer";

import { useState } from "react";
import { useEffect } from "react";

function Feed() { 

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/articles/`, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
        }})
            .then(function (apiArticles) {
              if (apiArticles.ok) {
                return apiArticles.json();
              }
            })
            .then(function (articles) {
              setArticles(articles);
            })
            .catch(function (err) {
              console.error(`Retour du serveur : ${err}`); // Show error if necessary
            });
        }, []);
    
    return (<>
        <Header />
        <div className="main-feed">
            <CreateArticle />
            {articles.map((article) => (
                <Article 
                key={article._id} 
                description={article.description}
                imageUrl={article.imageUrl}
                date={article.createdAt}
                user={article.user[0]}
                />
            ))}
        </div>
        <Footer />
    </>)

}

export default Feed;