import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./routes/main/Main";
import SavedNews from "./routes/savedNews/SavedNews";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import "./App.css";

function App() {
  const location = useLocation();

  const [signInOpened, setSignInOpened] = React.useState(false);
  const [signUpOpened, setSignUpOpened] = React.useState(false);

  const openSignIn = () => {
    setSignInOpened(true);
    setSignUpOpened(false);
  };
  const openSignUp = () => {
    setSignInOpened(false);
    setSignUpOpened(true);
  };
  const closePopups = () => {
    setSignInOpened(false);
    setSignUpOpened(false);
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
      />
    </>
  );
}

export default App;
