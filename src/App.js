import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import FilterSortGroup from "./components/Home+Search/FilterSortGroup";
import NavBar from "./components/Home+Search/NavBar";

function App() {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <div className="container">
            <HeaderMain />
            <NavBar />
          </div>
        }
      />
      <Route
        path={"/articles/search*"}
        element={
          <div className="container">
            <HeaderSmall />
            <SearchPage />
          </div>
        }
      />
      <Route
        path={"/articles/search*"}
        element={
          <div className="container">
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
            <CommentSection />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
