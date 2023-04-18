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
  const [searchParams] = useSearchParams();
  const [topic, setTopic] = useState("");
  const [sortParam, setSortParam] = useState("");
  const [order, setOrder] = useState("");

  console.log(searchParams);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles(topic)
      .then((articles) => {
        return setAllArticles(articles);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [topic, sortParam, order, searchParams]);

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
          <div>
            <HeaderMain />
            <section
              className="jumbotron text-center"
              style={{ padding: "3rem" }}
            >
              <div className="container" style={{ justifyContent: "center" }}>
                <h1 className="jumbotron-heading">NC News</h1>
                <p class="lead text-muted">
                  Welcome to my news page. Read, comment, like and share
                  articles on my favourite topics.
                </p>
              </div>

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
            </section>
            <div className="album py-5 bg-light" style={{ width: "100%" }}>
              <ListOfArticles
                allArticles={allArticles}
                setAllArticles={setAllArticles}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </div>
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
