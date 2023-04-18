import "../../App.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { fetchArticleByID } from "../../utils/utils";
import { useEffect } from "react";
// import ShareGroup from "./ShareGroup";
import CommentsSection from "./CommentsSection";
import VoteArticle from "./VoteArticle";
import { fetchCommentsByArticle } from "../../utils/utils";

function ArticleBody() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setAllComments] = useState([]);

  useEffect(() => {
    fetchArticleByID(article_id).then((selectedArticle) => {
      console.log(selectedArticle.article_id);
      setArticle(selectedArticle);
    });
  }, [article_id]);

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((returnedComments) => {
      setAllComments(returnedComments);
    });
  }, [article_id]);

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row">
        <div className="col-7">
          <h2>{article.title}</h2>
          <p>
            Written by: {article.author}{" "}
            {new Date(article.created_at).toLocaleDateString()}
          </p>
          <p> {article.body} </p>
          <VoteArticle
            article={article}
            article_id={article_id}
            comments={comments}
          />
        </div>{" "}
        <div className="col-5">
          <img
            src={article.article_img_url}
            className="card-img-top"
            alt="..."
          ></img>
        </div>
        <div className="col-12">
          <br></br>
          <CommentsSection
            articleID={article.article_id}
            comments={comments}
            setAllComments={setAllComments}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleBody;
