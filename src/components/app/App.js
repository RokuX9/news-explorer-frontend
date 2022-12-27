import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Main from "../../routes/main/Main";
import SavedNews from "../../routes/savedNews/SavedNews";
import Footer from "../footer/Footer";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import "./App.css";
import SignUpSuccess from "../signUpSuccess/SignUpSuccess";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [signInOpened, setSignInOpened] = React.useState(false);
  const [signUpOpened, setSignUpOpened] = React.useState(false);
  const [signUpSuccessOpened, setSignUpSuccessOpened] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    email: "",
  });
  const [savedCards, setSavedCards] = React.useState([]);

  const refreshPage = () => {
    navigate(0);
  };

  const openSignIn = () => {
    setSignInOpened(true);
    setSignUpSuccessOpened(false);
    setSignUpOpened(false);
  };
  const openSignUp = () => {
    setSignInOpened(false);
    setSignUpSuccessOpened(false);
    setSignUpOpened(true);
  };
  const openSignUpSuccess = () => {
    setSignInOpened(false);
    setSignUpSuccessOpened(true);
    setSignUpOpened(false);
  };
  const closePopups = () => {
    setSignInOpened(false);
    setSignUpOpened(false);
    setSignUpSuccessOpened(false);
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({
      email: "",
      nami: "",
    });
    setLoggedIn(false);
    refreshPage();
  };

  const loadCards = (token) => {
    MainApi.getArticles(token)
      .then((res) => {
        setSavedCards(res);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    MainApi.getMe(token)
      .then((res) => {
        setCurrentUser({
          email: res.email,
          name: res.name,
        });
        setLoggedIn(true);
        loadCards(token);
      })
      .catch((err) => {
        setLoggedIn(false);
      });
  }, []);
  return (
    <>
      <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
          <Navbar
            location={location}
            loggedIn={loggedIn}
            openSignIn={openSignIn}
            logout={logout}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  pathname={location.pathname}
                  savedCards={savedCards}
                  setSavedCards={setSavedCards}
                  loggedIn={loggedIn}
                  loadCards={loadCards}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedNews
                    pathname={location.pathname}
                    savedCards={savedCards}
                    setSavedCards={setSavedCards}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
      <SignIn
        closePopups={closePopups}
        isOpen={signInOpened}
        switchPopups={openSignUp}
        refreshPage={refreshPage}
      />
      <SignUp
        closePopups={closePopups}
        isOpen={signUpOpened}
        switchPopups={openSignIn}
        openSignUpSuccess={openSignUpSuccess}
      />
      <SignUpSuccess
        isOpen={signUpSuccessOpened}
        closePopups={closePopups}
        switchPopups={openSignIn}
      />
    </>
  );
}

export default App;
