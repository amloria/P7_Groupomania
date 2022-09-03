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
        fetch(`http://localhost:3000/api/articles/`)
            .then(function (apiArticles) {
              if (apiArticles.ok) {
                return apiArticles.json();
              }
            })
            .then(function (articles) {
            //   console.log(articles);  
              setArticles(articles);
            //   articles.map((a) => (
            //     <Article key={a._id} article={a} />
            //   ));
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
            />
        ))}
    </div>
    <Footer />
    </>)

}

export default Feed;