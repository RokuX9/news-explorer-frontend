import React from "react";
import "./Input.css";

export default function Input(props) {
  const inputRef = React.useRef(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  const handleInput = (e) => {
    props.setFormState(props.name, e.target.value);
    if (inputRef.current.validity.valid) {
      setShowError(false);
      setErrorMessage("");
      props.setValidation(props.name, true);
    } else {
      setShowError(true);
      setErrorMessage(inputRef.current.validationMessage);
      props.setValidation(props.name, false);
    }
  };

  React.useEffect(() => {
    inputRef.current.validity.valid || Boolean(props.defaultValue)
      ? props.setValidation(props.name, true)
      : props.setValidation(props.name, false);
    if (props.type !== "hidden")
      props.setFormState(props.name, inputRef.current.value);

    return () => {
      setErrorMessage("");
      setShowError(false);
    };
  }, [props.isOpen]);

  return (
    <>
      <p className="input__title">{props.title}</p>
      <input
        type={props.type}
        ref={inputRef}
        placeholder={props.placeholder}
        name={props.name}
        minLength={props.minLength}
        maxLength={props.maxLength}
        onChange={handleInput}
        value={props.value}
        className={
          "input " + props.className + (showError ? " input_error" : "")
        }
        id={props.id}
        required
      />
      <span
        className={
          showError
            ? "input__error-text input__error-text_active"
            : "input__error-text"
        }
      >
        {errorMessage}
      </span>
    </>
  );
}
