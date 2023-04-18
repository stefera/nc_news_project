import axios from "axios";

const address = axios.create({
  baseURL: "https://project-news2.onrender.com/api",
});

const fetchAllArticles = (topic, sortParam, order) => {
  console.log(topic, sortParam, order, "<<parameters");
  let base = "https://project-news2.onrender.com/api/articles";
  if (topic) {
    base += `?topic=${topic}`;
  }
  // if (sortParam) {
  //   if (topic) base += `&sortBy=${sortParam}`;
  //   else base += `?sortBy=${sortParam}`;
  //   console.log(base, "<<base");
  // }
  // if (order) {
  //   base += `&order=${order}`;
  // }

  return axios.get(base).then(({ data }) => {
    // console.log(data.articles, "in utils");
    return data.articles;
  });
};

const fetchArticleByID = (article_id) => {
  return address.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const fetchAllTopics = () => {
  return address.get(`/topics`).then(({ data }) => {
    return data;
  });
};

const postCommentByArticle = (article_id, commentBody) => {
  return address
    .post(`/articles/${article_id}/comments`, {
      body: commentBody,
      username: "grumpy19",
    })
    .then((commentReturned) => {
      return commentReturned;
    });
};

const fetchCommentsByArticle = (article_id) => {
  return address.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const incrementVotes = (article_id, value) => {
  const voteObj = { inc_votes: value };
  return address.patch(`articles/${article_id}`, voteObj).then(({ data }) => {
    return data;
  });
};

export {
  fetchAllArticles,
  fetchAllTopics,
  fetchArticleByID,
  postCommentByArticle,
  fetchCommentsByArticle,
  incrementVotes,
};
