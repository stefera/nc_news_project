import "../../App.css";
import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function CommentCard({ comment }) {
  // calculating the relative time of the comment (and corresponding message)
  const date = new Date(comment.created_at);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.round(diffMs / 60000); // 1 minute = 60000 ms
  const diffHours = Math.round(diffMs / 3600000); // 1 hour = 3600000 ms

  // output the relative time
  function timeMessage() {
    if (diffMins < 1) {
      return `${diffMins} minutes ago`;
    } else if (diffMins < 60) {
      return `${diffHours} hours ago`;
    }
  }

  /////

  return (
    <div
      className="card text-right col-11"
      style={{ float: "right", minWidth: "50%", marginTop: "10px" }}

      //style={{ width: 400 }}
      //make sure to add tertiary for users own comments, which should be left aligned and coloured blue.
      //troubleshoot: why not floating to the right?
    >
      <div className="card-body">
        <div className="card-subtitle" style={{ fontWeight: 600 }}>
          {comment.author}
          <span
            style={{
              fontWeight: "normal",
              color: "grey",
              marginInline: "1rem",
            }}
          >
            {!diffMins
              ? "just now"
              : diffMins < 60
              ? `${diffMins} mins ago`
              : `${diffHours} hours ago`}
          </span>
        </div>
        <div className="text-right">{comment.body}</div>
      </div>
    </div>
  );
}

export default CommentCard;
