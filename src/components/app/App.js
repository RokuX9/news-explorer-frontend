import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Main from "../../routes/main/Main";
import SavedNews from "../../routes/savedNews/SavedNews";
import Footer from "../footer/Footer";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import "./App.css";
import SignUpSuccess from "../signUpSuccess/SignUpSuccess";

function App() {
  const location = useLocation();

  const [signInOpened, setSignInOpened] = React.useState(false);
  const [signUpOpened, setSignUpOpened] = React.useState(false);
  const [signUpSuccessOpened, setSignUpSuccessOpened] = React.useState(false);

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

  const submitSignUp = (e) => {
    e.preventDefault();
    openSignUpSuccess();
  };

  return (
    <>
      <div className="App">
        <Navbar location={location} loggedIn={true} openSignIn={openSignIn} />
        <Routes>
          <Route path="/" element={<Main pathname={location.pathname} />} />
          <Route
            path="/saved-news"
            element={<SavedNews pathname={location.pathname} />}
          />
        </Routes>
        <Footer />
      </div>
      <SignIn
        closePopups={closePopups}
        isOpen={signInOpened}
        switchPopups={openSignUp}
      />
      <SignUp
        closePopups={closePopups}
        isOpen={signUpOpened}
        switchPopups={openSignIn}
        submit={submitSignUp}
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
