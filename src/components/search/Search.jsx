import React from "react";
import "./Search.css";
import Spinner from "../spinner/Spinner";
import NewsList from "../newsList/NewsList";

export default function Search(props) {
  const [searchResults, setSearchResult] = React.useState([]);

  React.useEffect(() => {
    setSearchResult(props.searchResults.slice(0, 3));
  }, [props.searchResults]);

  const showMore = () => {
    setSearchResult([
      ...searchResults,
      ...props.searchResults.slice(
        searchResults.length,
        searchResults.length + 3
      ),
    ]);
  };

  return (
    <div className="search">
      <div
        className={
          "search__success " +
          (props.searchSuccess ? "search__block_opened" : "")
        }
      >
        <h2 className="search__success-title">Search result</h2>
        <NewsList
          results={searchResults}
          keyword={props.searchKeyword}
          pathname={props.pathname}
          loggedIn={props.loggedIn}
          savedCards={props.savedCards}
          setSavedCards={props.setSavedCards}
          loadCards={props.loadCards}
        />
        {searchResults.length < props.searchResults.length && (
          <button className="search__show-more" onClick={showMore}>
            Show more
          </button>
        )}
      </div>
      <div
        className={
          "search__fail " + (props.searchFail ? "search__block_opened" : "")
        }
      >
        <div className="search__fail-icon"></div>
        <p className="search__fail-title">Nothing found</p>
        <p className="search__fail-text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
      <div
        className={
          "search__loading " +
          (props.searchLoading ? "search__block_opened" : "")
        }
      >
        <div className="search__spinner">
          <Spinner />
        </div>
        <p className="search__loading-text">Searching for news...</p>
      </div>
    </div>
  );
}
