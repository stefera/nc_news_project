import axios from "axios";

const address = axios.create({
  baseURL: "https://project-news2.onrender.com/api",
});

const fetchAllArticles = (topic, sortParam, order) => {
  let base = "https://project-news2.onrender.com/api/articles";
  if (topic) {
    base += `?topic=${topic}`;
  }
  if (sortParam) {
    if (topic) base += `&sortBy=${sortParam}`;
    else base += `?sortBy=${sortParam}`;
  }
  if (order) {
    base += `&order=${order}`;
  }

  return axios.get(base).then(({ data }) => {
    // console.log(data.articles, "in utils");
    return data.articles;
  });
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
