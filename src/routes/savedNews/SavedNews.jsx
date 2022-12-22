import React from "react";
import "./SavedNews.css";
import UserNewsHeader from "../../components/userNewsHeader/UserNewsHeader";
import NewsList from "../../components/newsList/NewsList";
import { cards } from "../../utils/mockData";

export default function SavedNews(props) {
  return (
    <div>
      <UserNewsHeader />
      <div className="saved-news__container">
        <NewsList results={cards} pathname={props.pathname} />
      </div>
    </div>
  );
}
