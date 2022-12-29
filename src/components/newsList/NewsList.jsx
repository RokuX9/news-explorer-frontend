import React from "react";
import Card from "../card/Card";
import "./NewsList.css";
import MainApi from "../../utils/MainApi";

export default function NewsList(props) {
  const deleteCard = (id) => {
    return MainApi.deleteArticle(id, localStorage.getItem("jwt")).then(
      (res) => {
        props.setSavedCards(
          props.results.filter((card) => {
            return card._id !== id;
          })
        );
      }
    );
  };

  const removeBookmark = (id) => {
    return MainApi.deleteArticle(id, localStorage.getItem("jwt")).then(() => {
      props.setSavedCards(
        props.savedCards.filter((card) => {
          return card._id !== id;
        })
      );
    });
  };

  return (
    <ul className="news-list">
      {props.results.map((card, i) => {
        let liked = false;
        let id = "";
        if (props.pathname === "/") {
          props.savedCards.find((news) => {
            if (card.url === news.link) {
              liked = true;
              id = news._id;
            }
          });
        }

        return props.pathname === "/" ? (
          <Card
            keyword={props.keyword}
            title={card.title}
            text={card.description}
            date={card.publishedAt}
            source={card.source.name}
            link={card.url}
            image={card.urlToImage}
            loggedIn={props.loggedIn}
            pathname={props.pathname}
            liked={liked}
            id={id}
            loadCards={props.loadCards}
            delete={removeBookmark}
            key={i}
          />
        ) : (
          <Card
            keyword={card.keyword}
            title={card.title}
            text={card.text}
            date={card.date}
            source={card.source}
            link={card.link}
            image={card.image}
            pathname={props.pathname}
            id={card._id}
            delete={deleteCard}
            key={i}
          />
        );
      })}
    </ul>
  );
}
