import React from "react";
import "./Header.css";
import NewsApi from "../../utils/NewsApi";

export default function Header(props) {
  const inputRef = React.useRef(null);

  return (
    <div className="header">
      <h2 className="header__title">What's going on in the world?</h2>
      <p className="header__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className="header__news-search"
        onSubmit={(e) => {
          e.preventDefault();
          props.openLoading();
          props.setSearchKeyword(inputRef.current.value);
          NewsApi.getNewsSearch(inputRef.current.value.split(" ").join("+"))
            .then((res) => {
              if (res.articles.length === 0) throw new Error("No results");
              props.setSearchResults(res.articles);
              props.openSuccess();
            })
            .catch(() => {
              props.openFail();
            });
          props.openSearch();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Search"
          className="header__input"
        />
        <button className="header__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
