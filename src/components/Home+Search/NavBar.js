import "../../App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchAllTopics } from "../../utils/utils";
import NavItem from "./NavItem";

function NavBar({ navFilter, setNavFilter, sortParam, setSortParam }) {
  const [allFilters, setAllFilters] = useState([]);

  useEffect(() => {
    fetchAllTopics().then((topics) => {
      console.log(topics);
      setAllFilters(topics);
    });
  }, []);
  return (
    <div className="container" style={{ maxWidth: "50%" }}>
      <ul className="nav nav-pills nav-fill">
        {allFilters.map((filter) => {
          return (
            <NavItem
              filter={filter}
              navFilter={navFilter}
              setNavFilter={setNavFilter}
              sortParam={sortParam}
              setSortParam={setSortParam}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
