import axios from "axios";

const address = axios.create({
  baseURL: "https://project-news2.onrender.com/api",
});

const fetchAllArticles = () => {
  return address.get("/articles").then((data) => {
    console.log(data);
    return data;
  });
};

export default { fetchAllArticles };
