import "../../App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

function ShareGroup() {
  return (
    <div className="row">
      <div className="col-10">Want to share this article?</div>
      <div className="col-2">
        <button className="btn btn-tertiary">Copy Link</button>
      </div>
    </div>
  );
}

export default ShareGroup;
