import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ArticleCard from "./ArticleCard";

function ListOfArticles() {
  return (
    <div className="container">
      {/* articles.map((article)=>{
      return (
        <li className="card" style="width: calc(20% - 10rem)">
         <ArticleCard />
         </li>
      )
    }) */}
    </div>
  );
}

export default ListOfArticles;
