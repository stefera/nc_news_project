import "/Users/samueltefera/NorthCoders/nc_news_project/src/App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ArticleCard from "./ArticleCard";

function ListOfArticles({ allArticles }) {
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>All Articles</h3>
      <ul style={{ listStyle: "none", display: "grid" }}>
        {allArticles.map((article) => {
          return (
            <li className="col-3" key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfArticles;
