import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Routes, Route, useSearchParams } from "react-router-dom";
import { useState, useEffect, React } from "react";
import FilterSortGroup from "./components/Home+Search/FilterSortGroup";
import NavBar from "./components/Home+Search/NavBar";
import HeaderMain from "./components/Headers/HeaderMain";
import HeaderSmall from "./components/Headers/HeaderSmall";
import ListOfArticles from "./components/Home+Search/ListOfArticles";
import SearchGroup from "./components/Home+Search/SearchGroup";
import ArticleBody from "./components/Article/ArticleBody";
import MyProfile from "./components/Profile/MyProfile";
import { fetchAllArticles } from "./utils/utils";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [topic, setTopic] = useState("");
  const [sortParam, setSortParam] = useState("");
  const [order, setOrder] = useState("");

  console.log(searchParams);

  useEffect(() => {
    const filterByTopic = searchParams.get("topic");
    console.log(filterByTopic);
    const sortByQuery = searchParams.get("sortBy");
    console.log(sortByQuery);
    const order = searchParams.get("order");
    console.log(order);
    fetchAllArticles(filterByTopic, sortByQuery, order).then((articles) => {
      // console.log(articles);
      return setAllArticles(articles);
    });
  }, [topic, sortParam, order]);

  // useEffect(() => {
  //   const newParams = new URLSearchParams(searchParams);
  //   setSearchParams(newParams);
  // }, [topic, sortParam, order]);

  return (
    <Routes>
      <Route
        path={"/articles/:article_id"}
        element={
          <div className="container">
            <ArticleBody />
          </div>
        }
      />
      <Route
        path={"/*"}
        element={
          <div className="container">
            <p className="h2" style={{ textAlign: "center" }}>
              NC News
            </p>
            <HeaderMain />
            <NavBar
              allArticles={allArticles}
              setAllArticles={setAllArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              topic={topic}
              setTopic={setTopic}
              sortParam={sortParam}
              setSortParam={setSortParam}
              order={order}
              setOrder={setOrder}
            />
            <ListOfArticles
              allArticles={allArticles}
              setAllArticles={setAllArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
        }
      />
      <Route
        path={"/articles/search/*"}
        element={
          <div className="container">
            <p className="h2" style={{ textAlign: "center" }}>
              SEARCH{" "}
            </p>
            <HeaderSmall />
            <SearchGroup />
            <ListOfArticles />
            <FilterSortGroup />
          </div>
        }
      />

      <Route
        path={"/profile"}
        element={
          <div className="container">
            <MyProfile />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
