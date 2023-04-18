import "../../App.css";

import React from "react"; // ,{ useState, useEffect }

function NavItem({ filter, topic, setTopic }) {
  console.log(filter, "filter");
  console.log(topic, "topic");

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
    // console.log(event.target.innerText, topic);

    if (event.target.innerText === topic) {
      setTopic("");
    } else {
      setTopic(event.target.innerText);
    }
  };
  return (
    <li
      key={filter.id}
      className="nav-item"
      style={{ margin: 10, borderRadius: 50 }}
    >
      <p
        className={
          filter.slug === topic ? "nav-link active" : "nav-link border"
        }
        onClick={resolveClick}
      >
        {filter.slug}
      </p>
    </li>
  );
}

export default NavItem;
