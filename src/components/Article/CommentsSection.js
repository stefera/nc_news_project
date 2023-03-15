import "../../App.css";
import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  fetchArticleByID,
  postCommentByArticle,
  fetchCommentsByArticle,
} from "../../utils/utils";
import CommentCard from "./CommentCard";

function CommentsSection({ articleID, setArticle }) {
  const [comments, setAllComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  //const { article_id } = useParams;
  // const [article, setArticle] = useState({});

  useEffect(() => {
    console.log(articleID);
    fetchCommentsByArticle(articleID).then((returnedComments) => {
      console.log(returnedComments, " returned Comments in CommentsSection");
      return setAllComments(returnedComments);
    });
  }, [articleID]);

  // useEffect(() => {
  //   fetchArticleByID(articleID).then((selectedArticle) => {
  //     console.log(selectedArticle);
  //     return setArticle(selectedArticle);
  //   });
  // }, []);

  // const handleChange = (event) => {
  //   setNewComment(event.target.value);
  //   console.log(newComment);
  // };
  // handled inline now

  const formSubmitHandler = (event) => {
    event.preventDefault();

    postCommentByArticle(articleID, newComment)
      .then((postedComment) => {
        //setAllComments([postedComment, ...comments]);
        // setNewComment("");
      })
      .catch((err) => {
        console.log("there was an error posting this comment", err);
      });

    // console.log(articleID, newComment, comments);

    setAllComments([
      { author: "grumpy19", body: newComment, created_at: new Date() },
      ...comments,
    ]);
    setNewComment("");
    console.log();
  };

  return (
    <div>
      <h5>Comments</h5>
      <div className="row">
        <form
          className="form-row align-items-center"
          typeof="form"
          onSubmit={formSubmitHandler}
        >
          <textarea
            className="form-control col-auto my-11"
            aria-label="With textarea"
            placeholder="Add your comment here"
            value={newComment}
            onChange={(event) => {
              console.log(newComment);
              setNewComment(event.target.value);
            }}
          ></textarea>
          <div className="col-auto my-1">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!newComment.length}
            >
              Submit
            </button>
          </div>
        </form>
        <ul style={{ listStyle: "none" }}>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard comment={comment} comments={comments} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CommentsSection;
