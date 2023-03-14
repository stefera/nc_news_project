import "../../App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ArticleCard from "../Home+Search/ArticleCard";

function ArticleBody() {
  return (
    <div className="container">
      <ArticleCard />
    </div>
  );
}

export default ArticleBody;
