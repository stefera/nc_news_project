import "../../App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SortOrderGroup({
  // filter,
  searchParams,
  setSearchParams,
  // topic,
  // setTopic,
  sortParam,
  setSortParam,
  // order,
  // setOrder,
}) {
  const acceptedSorts = [
    { date: "created_at" },
    { votes: "votes" },
    { comments: "comments" },
  ];
  const acceptedOrders = ["desc", "asc"];

  // const resolveSortChange = (event) => {
  //   event.preventDefault();
  //   console.log(event, sortParam, "HERERE");
  //   setSortParam(event.target);
  // };

  const setSortOrder = (direction) => {
    // copy existing queries to avoid mutation
    const newParams = new URLSearchParams(searchParams);
    // set the order query
    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  return (
    <div>
      <label htmlFor="sortby-dropdown">Sort by:</label>
      <div className="dropdown" id="sortby-dropdown">
        <button
          className={
            !sortParam
              ? "btn btn-secondary dropdown-toggle"
              : "btn btn-primary dropdown-toggle"
          }
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-disabled={!sortParam ? "true" : "false"}
          value={sortParam}
        ></button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {acceptedSorts.map((sort) => {
            return (
              <li
                onClick={() => {
                  console.log(Object.values(sort)[0]);
                  setSortParam(Object.values(sort)[0]);
                }}
              >
                <a className="dropdown-item" href="#">
                  {Object.values(sort)[0]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dropdown" id="sortby-dropdown">
        <button
          className={
            !sortParam
              ? "btn btn-secondary dropdown-toggle"
              : "btn btn-primary dropdown-toggle"
          }
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-disabled={!sortParam ? "true" : "false"}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrows-up-down" />
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {acceptedOrders.map((order) => {
            return (
              <li
                onClick={() => {
                  console.log(order);
                  setSortOrder(order);
                }}
              >
                <a className="dropdown-item" href="#">
                  {order}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SortOrderGroup;
