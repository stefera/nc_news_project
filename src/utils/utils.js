import axios from "axios";

const address = axios.create({
  baseURL: "https://project-news2.onrender.com/api",
});

const fetchAllArticles = (params) => {
  if (!params) {
    return axios
      .get("https://project-news2.onrender.com/api/articles")
      .then(({ data }) => {
        // console.log(data.articles, "in utils");
        return data.articles;
      });
  } else {
    return axios
      .get(`https://project-news2.onrender.com/api/articles?topic=${params}`)
      .then(({ data }) => {
        console.log(params);
        return data.articles;
      });
  }
};

const fetchArticleByID = (article_id) => {
  return address.get(`/articles/${article_id}`).then(({ data }) => {
    console.log(data, "in utils");
    console.log(data.article, "in utils");

    return data.article;
  });
};

const fetchAllTopics = () => {
  return address.get(`/topics`).then(({ data }) => {
    console.log(data, "in utils");

    return data;
  });
};

export { fetchAllArticles, fetchArticleByID, fetchAllTopics };
