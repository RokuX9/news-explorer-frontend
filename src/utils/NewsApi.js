import { checkResponseStatus } from "./utils";

const { REACT_APP_NEWS_API_KEY } = process.env;

const baseURL = "https://newsapi.org/v2/everything?";

const getDates = () => {
  const now = new Date();
  const lastWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7
  );
  return [
    now.toISOString().split("T")[0],
    lastWeek.toISOString().split("T")[0],
  ];
};

const NewsApi = {
  getNewsSearch: (search) => {
    const [today, lastWeek] = getDates();
    return fetch(
      `${baseURL}q=${search}&from=${lastWeek}&to=${today}&apiKey=${REACT_APP_NEWS_API_KEY}`
    ).then(checkResponseStatus);
  },
};

export default NewsApi;
