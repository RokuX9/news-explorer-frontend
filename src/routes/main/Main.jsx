import React from "react";
import Header from "../../components/header/Header";
import AboutMe from "../../components/aboutMe/AboutMe";
import Search from "../../components/search/Search";

export default function Main(props) {
  const [SearchOpen, setSearchOpen] = React.useState(false);
  const [searchSuccess, setSearchSuccess] = React.useState(false);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [searchFail, setSearchFail] = React.useState(false);
  const openSearch = () => {
    setSearchOpen(true);
  };
  const closeSearch = () => {
    setSearchOpen(false);
  };
  return (
    <div>
      <Header
        openSearch={openSearch}
        setSearchLoading={setSearchLoading}
        setSearchSuccess={setSearchSuccess}
        setSearchFail={setSearchFail}
      />
      {SearchOpen && (
        <Search
          pathname={props.pathname}
          searchSuccess={searchSuccess}
          searchLoading={searchLoading}
          searchFail={searchFail}
        />
      )}
      <AboutMe />
    </div>
  );
}
