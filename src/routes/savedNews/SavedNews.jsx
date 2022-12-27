import React from "react";
import "./SavedNews.css";
import UserNewsHeader from "../../components/userNewsHeader/UserNewsHeader";
import NewsList from "../../components/newsList/NewsList";

export default function SavedNews(props) {
  const [keywords, setKeywords] = React.useState([]);
  const sortByMostCommon = (array) => {
    const commonObject = array.reduce((res, cur) => {
      const currentCount = res[cur.keyword] ?? 0;
      return {
        ...res,
        [cur.keyword]: currentCount + 1,
      };
    }, {});
    const commonArray = Object.keys(commonObject).sort((a, b) => {
      return commonObject[a] < commonObject[b] ? 1 : -1;
    });
    setKeywords(commonArray);
  };
  React.useEffect(() => {
    sortByMostCommon(props.savedCards);
  }, [props.savedCards]);
  return (
    <div>
      <UserNewsHeader
        amountOfCards={props.savedCards.length}
        keywords={keywords}
      />
      <div className="saved-news__container">
        <NewsList
          results={props.savedCards}
          pathname={props.pathname}
          setSavedCards={props.setSavedCards}
        />
      </div>
    </div>
  );
}
