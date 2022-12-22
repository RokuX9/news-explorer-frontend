import React from "react";
import "./Header.css";

export default function Header(props) {
  const inputRef = React.useRef(null);

  const failSearch = () => {
    props.setSearchFail(false);
    props.setSearchSuccess(false);
    props.setSearchLoading(true);
    setTimeout(() => {
      props.setSearchLoading(false);
      props.setSearchFail(true);
    }, 3000);
  };

  const successSearch = () => {
    props.setSearchFail(false);
    props.setSearchSuccess(false);
    props.setSearchLoading(true);
    setTimeout(() => {
      props.setSearchLoading(false);
      props.setSearchSuccess(true);
    }, 3000);
  };
  return (
    <div className="header">
      <h2 className="header__title">What's going on in the world?</h2>
      <p className="header__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="header__news-search">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Search"
          className="header__input"
        />
        <button
          className="header__button"
          type="button"
          onClick={() => {
            props.openSearch();
            inputRef.current.value === "" ? failSearch() : successSearch();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
