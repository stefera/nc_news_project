import "../../App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchAllTopics } from "../../utils/utils";
import NavItem from "./NavItem";
import SortOrderGroup from "./SortOrderGroup";

function NavBar({ topic, setTopic, sortParam, setSortParam, order, setOrder }) {
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
        <p>Filter by topic:</p>
        {allFilters.map((filter) => {
          return (
            <NavItem
              filter={filter}
              topic={topic}
              setTopic={setTopic}
              sortParam={sortParam}
              setSortParam={setSortParam}
            />
          );
        })}
      </ul>

      <p>Sort by:</p>

      <SortOrderGroup
        sortParam={sortParam}
        setSortParam={setSortParam}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
}

export default NavBar;
