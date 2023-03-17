import "../../App.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { fetchArticleByID } from "../../utils/utils";
import { useEffect } from "react";
import ShareGroup from "./ShareGroup";
import CommentsSection from "./CommentsSection";
import VoteArticle from "./VoteArticle";

function ArticleBody() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleByID(article_id).then((selectedArticle) => {
      console.log(selectedArticle);
      return setArticle(selectedArticle);
    });
  }, [article_id]);
  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row">
        <div className="col-5">
          <img
            src={article.article_img_url}
            className="card-img-top"
            alt="..."
          ></img>
        </div>
        <div className="col-7">
          <h2>{article.title}</h2>
          <p>
            Written by: {article.author}{" "}
            {new Date(article.created_at).toLocaleDateString()}
          </p>
          <p> {article.body} </p>
          <br></br>
          Like this article?
          <ShareGroup article={article} />
          <VoteArticle article={article} article_id={article_id} />
          <CommentsSection articleID={article.article_id} />
        </div>
      </div>
    </div>
  );
}

export default ArticleBody;
