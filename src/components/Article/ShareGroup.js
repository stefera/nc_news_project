import "../../App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

function ShareGroup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">Want to share this article?</div>
        <div className="col-2">
          <btn>Copy Link</btn>
        </div>
      </div>
    </div>
  );
}

export default ShareGroup;
