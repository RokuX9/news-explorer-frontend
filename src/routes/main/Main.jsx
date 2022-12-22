import React from "react";
import Header from "../../components/header/Header";
import AboutMe from "../../components/aboutMe/AboutMe";
import Search from "../../components/search/Search";

export default function Main(props) {
  const [SearchOpen, setSearchOpen] = React.useState(false);
  const openSearch = () => {
    setSearchOpen(true);
  };
  const closeSearch = () => {
    setSearchOpen(false);
  };
  return (
    <div>
      <Header openSearch={openSearch} />
      {SearchOpen && <Search pathname={props.pathname} />}
      <AboutMe />
    </div>
  );
}
