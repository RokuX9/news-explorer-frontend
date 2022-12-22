import React from "react";
import "./Card.css";

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
  });

  return (
    <div className="card">
      <img
        src={props.image}
        alt={props.title + " image"}
        className="card__image"
      />
      <div className="card__content">
        <p className="card__date">{dateString}</p>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__text">{props.text}</p>
        <p className="card__source">{props.source}</p>
      </div>
      {props.pathname === "/saved-news" && (
        <button className="card__delete"></button>
      )}
      {props.pathname === "/saved-news" && (
        <p className="card__tooltip">Remove from saved</p>
      )}
      {props.pathname === "/" && <button className="card__bookmark"></button>}
      {!props.loggedIn && props.pathname === "/" && (
        <p className="card__tooltip">Sign in to save articles</p>
      )}
      {props.pathname === "/saved-news" && (
        <p className="card__keyword">{props.keyword}</p>
      )}
    </div>
  );
}
