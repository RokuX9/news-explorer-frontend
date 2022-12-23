import React from "react";
import "./Search.css";
import Spinner from "../spinner/Spinner";
import NewsList from "../newsList/NewsList";
import { cards } from "../../utils/mockData";

export default function Search(props) {
  const [searchResults, setSearchResult] = React.useState([]);

  React.useEffect(() => {
    setSearchResult(cards.slice(0, 3));
  }, []);

  const showMore = () => {
    setSearchResult([
      ...searchResults,
      ...cards.slice(searchResults.length, searchResults.length + 3),
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
        <NewsList results={searchResults} pathname={props.pathname} />
        {searchResults.length < cards.length && (
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
