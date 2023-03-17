import "../../App.css";
import { useEffect } from "react";
import React, { useState } from "react"; // ,{ useState, useEffect }
import { incrementVotes } from "../../utils/utils";

function VoteArticle({ article, article_id }) {
  console.log(article, article_id);

  const [votes, setVotes] = useState(0);

  useEffect(() => {
    setVotes(article.votes);
  }, [article.votes]);

  const resolveClick = (event) => {
    event.preventDefault();
    // console.log(article, article.article_id);
    incrementVotes(article_id, 1).then((result) => {
      console.log(result);
    });
    let newVotes = votes + 1;
    console.log(newVotes);
    setVotes(newVotes);
  };
  return (
    <div className="col-md-4 col-xs-12">
      Like
      <i onClick={resolveClick} class="fa-solid fa-heart"></i>
      <p>{votes}</p>
    </div>
  );
}
export default VoteArticle;
