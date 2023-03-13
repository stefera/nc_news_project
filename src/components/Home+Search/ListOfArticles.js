import "/Users/samueltefera/NorthCoders/nc_news_project/src/App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ArticleCard from "./ArticleCard";

function ListOfArticles({ allArticles }) {
  return (
    <div className="container">
      <p>List of Articles</p>
      <ul>
        {allArticles.map((article) => {
          return (
            <li className="card" style="width: calc(20% - 10rem)">
              <ArticleCard />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfArticles;
