import "../../App.css";
import React from "react";
import { useSearchParams } from "react-router-dom";

function SortOrderGroup({
  sortParam,
  setSortParam,
  // order,
  // setOrder,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const acceptedSorts = [
    { date: "created_at" },
    { votes: "votes" },
    { comments: "comments" },
  ];
  // const acceptedOrders = ["desc", "asc"];

  const setSort = (query) => {
    // copy existing queries to avoid mutation
    console.log(query);
    const newParams = new URLSearchParams(searchParams);
    // set the order query
    newParams.set("sortBy", query);
    setSortParam(query);
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
                  setSort(sort[Object.keys(sort)[0]]);
                }}
              >
                <p className="dropdown-item">{Object.values(sort)[0]}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className="dropdown" id="sortby-dropdown">
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
                  // setSortOrder(order);
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
    */}
    </div>
  );
}

export default SortOrderGroup;
