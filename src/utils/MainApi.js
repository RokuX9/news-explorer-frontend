import { checkResponseStatus } from "./utils";

const baseURL = "https://api.dean-news.students.nomoredomainssbs.ru";

const MainApi = {
  register: (data) => {
    return fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(checkResponseStatus);
  },

  login: (data) => {
    return fetch(`${baseURL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(checkResponseStatus);
  },

  getMe: (token) => {
    return fetch(`${baseURL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(checkResponseStatus);
  },

  getArticles: (token) => {
    return fetch(`${baseURL}/articles`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(checkResponseStatus);
  },

  postArticle: (data, token) => {
    return fetch(`${baseURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(checkResponseStatus);
  },

  deleteArticle: (articleId, token) => {
    return fetch(`${baseURL}/articles/${articleId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(checkResponseStatus);
  },
};

export default MainApi;
