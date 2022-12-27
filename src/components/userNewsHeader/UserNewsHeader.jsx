import React from "react";
import "./UserNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function UserNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const generateKeywordsString = () => {
    return props.keywords.length > 2
      ? `${props.keywords[0]}, ${props.keywords[1]}, and ${
          props.keywords.length - 2
        } other`
      : props.keywords.join(", ");
  };
  return (
    <div className="user-header">
      <h2 className="user-header__title">Saved articles</h2>
      <p className="user-header__subtitle">
        {currentUser.name}, you have {props.amountOfCards} saved articles
      </p>
      <p className="user-header__paragraph">
        By keywords:{" "}
        <span className="user-header__keywords">
          {generateKeywordsString()}
        </span>
      </p>
    </div>
  );
}
