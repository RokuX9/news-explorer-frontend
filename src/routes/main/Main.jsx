import React from "react";
import Header from "../../components/header/Header";
import AboutMe from "../../components/aboutMe/AboutMe";
import Search from "../../components/search/Search";

export default function Main(props) {
  const [SearchOpen, setSearchOpen] = React.useState(false);
  const [searchSuccess, setSearchSuccess] = React.useState(false);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [searchFail, setSearchFail] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const openSearch = () => {
    setSearchOpen(true);
  };
  const closeSearch = () => {
    setSearchOpen(false);
  };
  const openLoading = () => {
    setSearchFail(false);
    setSearchSuccess(false);
    setSearchLoading(true);
  };

  const openSuccess = () => {
    setSearchFail(false);
    setSearchSuccess(true);
    setSearchLoading(false);
  };

  const openFail = () => {
    setSearchFail(true);
    setSearchSuccess(false);
    setSearchLoading(false);
  };

  return (
    <div>
      <Header
        openSearch={openSearch}
        openSuccess={openSuccess}
        openFail={openFail}
        openLoading={openLoading}
        setSearchResults={setSearchResults}
        setSearchKeyword={setSearchKeyword}
      />
      {SearchOpen && (
        <Search
          pathname={props.pathname}
          searchSuccess={searchSuccess}
          searchLoading={searchLoading}
          searchFail={searchFail}
          searchResults={searchResults}
          searchKeyword={searchKeyword}
          savedCards={props.savedCards}
          loggedIn={props.loggedIn}
          setSavedCards={props.setSavedCards}
          loadCards={props.loadCards}
        />
      )}
      <AboutMe />
    </div>
  );
}
