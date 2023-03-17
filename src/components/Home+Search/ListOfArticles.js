import "../../App.css";
import React from "react";
import ArticleCard from "./ArticleCard";

function ListOfArticles({ allArticles }) {
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>All Articles</h3>
      <div className="row">
        {/* <ul style={{ listStyle: "none" }}> */}
        {allArticles.map((article, index) => {
          return (
            <p
              className="col-md-4 col-sm-6 col-xs-12"
              key={index}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ArticleCard article={article} />
            </p>
          );
        })}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default ListOfArticles;
