import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <h2 className="header__title">What's going on in the world?</h2>
      <p className="header__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="header__news-search">
        <input type="text" className="header__input" />
        <button
          className="header__button"
          type="button"
          onClick={() => {
            props.openSearch();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
