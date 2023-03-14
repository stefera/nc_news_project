import "../../App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

function CommentsSection() {
  const formSubmitHandler = (event) => {};

  return (
    <div className="form-row align-items-center" onSubmit={formSubmitHandler}>
      <textarea
        class="form-control"
        aria-label="With textarea"
        placeholder="Add your comment here"
      ></textarea>
      <div class="col-auto my-1">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentsSection;
