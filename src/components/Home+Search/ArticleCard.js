import "../../App.css";
import { Routes, Route, Link } from "react-router-dom";
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

        <Link to={`/articles/${article.article_id}`}>
          <a href="#" className="btn btn-primary">
            Read article
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
