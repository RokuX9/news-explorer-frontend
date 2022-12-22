import React from "react";
import Card from "../card/Card";
import "./NewsList.css";

export default function NewsList(props) {
  return (
    <div className="news-list">
      {props.results.map((card, i) => (
        <Card
          keyword={card.keyword}
          title={card.title}
          text={card.text}
          date={card.date}
          source={card.source}
          link={card.link}
          image={card.image}
          pathname={props.pathname}
          key={i}
        />
      ))}
    </div>
  );
}
