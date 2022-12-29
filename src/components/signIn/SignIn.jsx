import React from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import Input from "../input/Input";
import MainApi from "../../utils/MainApi";

export default function SignIn(props) {
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
  });
  const [formValidation, setValidation] = React.useState({
    email: false,
    password: false,
  });

  const setInputState = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };
  const setInputValidation = (name, isValid) => {
    setValidation({ ...formValidation, [name]: isValid });
  };

  const submit = (e) => {
    e.preventDefault();
    return MainApi.login(formState).then((res) => {
      localStorage.setItem("jwt", res.token);
      props.refreshPage();
    });
  };

  return (
    <PopupWithForm
      name="signIn"
      header="Sign In"
      buttonText="Sign In"
      isOpen={props.isOpen}
      submit={submit}
      closePopups={props.closePopups}
      formValidation={formValidation}
      linkText="Sign Up"
      switchPopups={props.switchPopups}
    >
      <Input
        type="email"
        isOpen={props.isOpen}
        title="Email"
        name="email"
        placeholder="Enter email"
        className="form__input"
        id="signin-email"
        setValidation={setInputValidation}
        setFormState={setInputState}
        required
      />
      <Input
        type="password"
        isOpen={props.isOpen}
        title="Password"
        name="password"
        placeholder="Enter password"
        minLength={8}
        maxLength={30}
        className="form__input"
        id="signin-password"
        setValidation={setInputValidation}
        setFormState={setInputState}
        required
      />
    </PopupWithForm>
  );
}
