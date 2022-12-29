import React from "react";
import "./Card.css";
import MainApi from "../../utils/MainApi";

export default function Card(props) {
  const [dateString, setDateString] = React.useState("");

  React.useEffect(() => {
    const date = Date.parse(new Date(props.date));
    const dateFormat = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setDateString(dateFormat.format(date));
  }, []);

  return (
    <article className="card">
      <a href={props.link} target="_blank">
        <img
          src={props.image}
          alt={props.title + " image"}
          className="card__image"
        />
      </a>
      <div className="card__content">
        <p className="card__date">{dateString}</p>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__text">{props.text}</p>
        <p className="card__source">{props.source}</p>
      </div>
      {props.pathname === "/saved-news" && (
        <button
          className="card__delete"
          onClick={() => {
            props.delete(props.id);
          }}
        ></button>
      )}
      {props.pathname === "/saved-news" && (
        <p className="card__tooltip">Remove from saved</p>
      )}
      {props.pathname === "/" && (
        <button
          className={
            "card__bookmark " + (props.liked ? "card__bookmark_active" : "")
          }
          onClick={() => {
            const token = localStorage.getItem("jwt");
            !props.liked
              ? MainApi.postArticle(
                  {
                    keyword: props.keyword,
                    title: props.title,
                    text: props.text,
                    date: dateString,
                    source: props.source,
                    link: props.link,
                    image: props.image,
                  },
                  token
                )
                  .then((res) => {
                    console.log(res);
                    props.loadCards(token);
                  })
                  .catch((err) => {
                    console.log(err);
                  })
              : props.delete(props.id);
          }}
        ></button>
      )}
      {!props.loggedIn && props.pathname === "/" && (
        <p className="card__tooltip">Sign in to save articles</p>
      )}
      {props.pathname === "/saved-news" && (
        <p className="card__keyword">{props.keyword}</p>
      )}
    </article>
  );
}
