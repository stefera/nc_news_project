import "../../App.css";
import { Routes, Route, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchAllTopics } from "../../utils/utils";

function NavItem({ filter, navFilter, setNavFilter }) {
  const { topic } = useParams();
  console.log(filter);
  return (
    <li key={filter.id} className="nav-item">
      {topic !== filter.slug ? (
        <Link to={`/articles?filter=${filter.slug}`}>
          <a href="#" className="nav-link">
            {" "}
            {filter.slug}{" "}
          </a>
        </Link>
      ) : (
        <Link to="/">
          <a className="nav-link active" href="#">
            {" "}
            {filter.slug}{" "}
          </a>
        </Link>
      )}
    </li>
  );
}

export default NavItem;

//to=`/articles?filter=${filter.slug}`
