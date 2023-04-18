import "../../App.css";
import { useEffect } from "react";
import React, { useState } from "react"; // ,{ useState, useEffect }
import { incrementVotes } from "../../utils/utils";

function VoteArticle({ article, article_id, comments }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setVotes(article.votes);
    setVoted(null);
    if (!article_id) {
      setActive(false);
    }
  }, [article, article_id]);

  const resolveClick = (event) => {
    event.preventDefault();
    // console.log(article, article.article_id);
    if (!voted) {
      let newVotes = votes + 1;
      setVotes(newVotes);
      setVoted(true);
      incrementVotes(article_id, 1);
    } else {
      let newVotes = votes - 1;
      setVotes(newVotes);
      setVoted(false);
      incrementVotes(article_id, -1);
    }
  };
  return (
    <div className="col-md-4 col-xs-12">
      <p>
        <i
          onClick={resolveClick}
          className={!voted ? "fa-regular fa-heart" : "fa-solid fa-heart"}
          style={{
            color: voted ? "red" : "black",
            marginInlineEnd: 5,
            width: 20,
          }}
          aria-disabled={active ? false : true}
        ></i>
        {votes}

        <i
          className="fa-regular fa-comment"
          style={{
            marginInlineStart: 25,
            marginInlineEnd: 5,
          }}
        ></i>
        {comments.length}
      </p>
    </div>
  );
}
export default VoteArticle;
