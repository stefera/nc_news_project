import "../../App.css";

import React from "react"; // ,{ useState, useEffect }

function NavItem({ filter, topic, setTopic }) {
  console.log(filter, topic);
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
    <li key={filter.id} className="nav-item">
      {/* <Link
        style={{ textDecoration: "none" }}
        to={filter.slug === topic ? `/articles?topic=${filter.slug}` : "/"}
      > */}
      <p
        className={
          filter.slug === topic ? "nav-link active" : "nav-link border"
        }
        onClick={resolveClick}
      >
        {filter.slug}
      </p>
      {/* </Link> */}

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
