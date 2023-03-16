import "../../App.css";
import {
  Routes,
  Route,
  useParams,
  Link,
  useSearchParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchAllTopics } from "../../utils/utils";

function NavItem({
  filter,
  navFilter,
  setNavFilter,
  searchParams,
  setSearchParams,
}) {
  console.log(filter, navFilter);
  // console.log(searchParams, topic, filter.slug);

  // const resolveClick = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.innerText, filter.slug);
  //   if (event.target.innerText === searchParams) {
  //     setSearchParams("");
  //   } else {
  //     let param = "filter=" + event.target.innerText;
  //     setSearchParams(param);
  //   }
  // };

  const resolveClick = (event) => {
    event.preventDefault();
    console.log(event.target.innerText, navFilter);

    if (event.target.innerText === navFilter) {
      setNavFilter("");
    } else {
      setNavFilter(event.target.innerText);
    }
  };
  return (
    <li key={filter.id} className="nav-item">
      <Link
        style={{ textDecoration: "none" }}
        to={filter.slug === navFilter ? `/articles?topic=${filter.slug}` : "/"}
      >
        <a
          className={filter.slug === navFilter ? "nav-link active" : "nav-link"}
          onClick={resolveClick}
        >
          {filter.slug}
        </a>
      </Link>

      {/* {topic !== filter.slug ? (
        
          <a href="#" className="nav-link">
            {" "}
            {filter.slug}{" "}
          </a>
        </Link>
      ) : (
        <Link to={"/"}>
          <a className="nav-link active" href="#">
            {" "}
            {filter.slug}{" "}
          </a>
        </Link>
      )} */}
    </li>
  );
}

export default NavItem;

//to=`/articles?filter=${filter.slug}`
