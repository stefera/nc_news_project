import axios from "axios";

const address = axios.create({
  baseURL: "https://project-news2.onrender.com/api",
});

const fetchAllArticles = () => {
  return axios
    .get("https://project-news2.onrender.com/api/articles")
    .then(({ data }) => {
      // console.log(data.articles, "in utils");
      return data.articles;
    });
};

const fetchArticleByID = (article_id) => {
  return address.get(`/articles/${article_id}`).then(({ data }) => {
    // console.log(data, "in utils");
    // console.log(data.article, "in utils");

    return data.article;
  });
};

const postCommentByArticle = (article_id, commentBody) => {
  console.log(article_id, commentBody);
  return address
    .post(`/articles/${article_id}/comments`, {
      body: commentBody,
      username: "grumpy19",
    })
    .then((commentReturned) => {
      console.log(commentReturned, "comment successful");
      return commentReturned;
    });
};

const fetchCommentsByArticle = (article_id) => {
  return address.get(`/articles/${article_id}/comments`).then(({ data }) => {
    // console.log(data, "all comments fetched successfully");
    return data.comments;
  });
};

export {
  fetchAllArticles,
  fetchArticleByID,
  postCommentByArticle,
  fetchCommentsByArticle,
};
