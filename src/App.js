import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, React } from "react";
import FilterSortGroup from "./components/Home+Search/FilterSortGroup";
import NavBar from "./components/Home+Search/NavBar";
import HeaderMain from "./components/Headers/HeaderMain";
import HeaderSmall from "./components/Headers/HeaderSmall";
import ListOfArticles from "./components/Home+Search/ListOfArticles";
import SearchGroup from "./components/Home+Search/SearchGroup";
import ArticleBody from "./components/Article/ArticleBody";
import ShareGroup from "./components/Article/ShareGroup";
import CommentsSection from "./components/Article/CommentsSection";
import MyProfile from "./components/Profile/MyProfile";
import fetchAllArticles from "./utils/utils";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    fetchAllArticles().then(({ data }) => {
      setAllArticles(data);
    });
  }, []);

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <div className="container">
            <p className="h2">HOME PAGE</p>
            <HeaderMain />
            <NavBar
              allArticles={allArticles}
              setAllArticles={setAllArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
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
            <p className="h2" style="center">
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
        path={"/articles/:article_id"}
        element={
          <div className="container">
            <ArticleBody />
            <ShareGroup />
            <CommentsSection />
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
