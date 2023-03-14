import "/Users/samueltefera/NorthCoders/nc_news_project/src/App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="card" style={{ width: 400 }}>
      <img
        src={article.article_img_url}
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title"> {article.title}</h5>
        {/* <p className="card-text"> {article.body}</p> */}

        <a href="#" className="btn btn-primary">
          Read article
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
