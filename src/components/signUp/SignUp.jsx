import React from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import Input from "../input/Input";

export default function SignUp(props) {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [formValidation, setValidation] = React.useState({
    name: false,
    email: false,
    password: false,
  });

  const setInputState = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };
  const setInputValidation = (name, isValid) => {
    setValidation({ ...formValidation, [name]: isValid });
  };
  return (
    <PopupWithForm
      name="signUp"
      header="Sign Up"
      buttonText="Sign Up"
      isOpen={props.isOpen}
      submit={props.submit}
      closePopups={props.closePopups}
      formValidation={formValidation}
      linkText="Sign In"
      switchPopups={props.switchPopups}
    >
      <Input
        type="email"
        isOpen={props.isOpen}
        name="email"
        title="Email"
        className="form__input"
        placeholder="Enter your email"
        id="signin-email"
        setValidation={setInputValidation}
        setFormState={setInputState}
        required
      />
      <Input
        type="password"
        isOpen={props.isOpen}
        name="password"
        title="Password"
        className="form__input"
        placeholder="Enter your password"
        minLength={8}
        maxLength={30}
        id="signin-password"
        setValidation={setInputValidation}
        setFormState={setInputState}
        required
      />
      <Input
        type="text"
        isOpen={props.isOpen}
        name="name"
        title="Username"
        placeholder="Enter your username"
        minLength={2}
        maxLength={30}
        className="form__input"
        id="signin-name"
        setValidation={setInputValidation}
        setFormState={setInputState}
        required
      />
    </PopupWithForm>
  );
}
