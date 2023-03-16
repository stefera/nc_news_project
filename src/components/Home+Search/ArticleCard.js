import "../../App.css";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="card" style={{ margin: "15px" }}>
      <img
        src={article.article_img_url}
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title"> {article.title}</h5>
        <p
          className="card-text"
          style={{ color: "grey", marginBottom: "20px" }}
        >
          {" "}
          by {article.author}
        </p>

        <Link to={`/articles/${article.article_id}`}>
          <a className="btn btn-primary">Read article</a>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
