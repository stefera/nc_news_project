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
import { fetchAllArticles } from "./utils/utils";

function App() {
  const articleArray = [
    {
      title: "Living in the shadow of a great man",
      topic: "mitch",
      author: "butter_bridge",
      body: "I find this existence challenging",
      created_at: 1594329060000,
      votes: 100,
      article_img_url:
        "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    },
    {
      title: "Sony Vaio; or, The Laptop",
      topic: "mitch",
      author: "icellusedkars",
      body: "Call me Mitchell. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would buy a laptop about a little and see the codey part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to coding as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the laptop. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the the Vaio with me.",
      created_at: 1602828180000,
      article_img_url:
        "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    },
    {
      title: "Eight pug gifs that remind me of mitch",
      topic: "mitch",
      author: "icellusedkars",
      body: "some gifs",
      created_at: 1604394720000,
      article_img_url:
        "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    },
    {
      title: "Student SUES Mitch!",
      topic: "mitch",
      author: "rogersop",
      body: "We all love Mitch and his wonderful, unique typing style. However, the volume of his typing has ALLEGEDLY burst another students eardrums, and they are now suing for damages",
      created_at: 1588731240000,
      article_img_url:
        "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    },
    {
      title: "UNCOVERED: catspiracy to bring down democracy",
      topic: "cats",
      author: "rogersop",
      body: "Bastet walks amongst us, and the cats are taking arms!",
      created_at: 1596464040000,
      article_img_url:
        "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    },
    {
      title: "A",
      topic: "mitch",
      author: "icellusedkars",
      body: "Delicious tin of cat food",
      created_at: 1602986400000,
      article_img_url:
        "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    },
  ];

  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    fetchAllArticles().then((articles) => {
      console.log(articles);
      return setAllArticles(articles);
    });
  }, []);

  return (
    <Routes>
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
        path={"/*"}
        element={
          <div className="container">
            <p className="h2" style={{ textAlign: "center" }}>
              HOME PAGE
            </p>
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
