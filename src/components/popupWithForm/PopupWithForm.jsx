import React from "react";
import Button from "../button/Button";
import Overlay from "../overlay/Overlay";
import "./PopupWithForm.css";

export default function PopupWithForm({ children, ...props }) {
  const [disableButton, setDisableButton] = React.useState(true);
  const [showError, setShowError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("Placeholder");

  const formRef = React.useRef(null);
  const setButtonDisabled = React.useCallback(() => {
    Object.values(props.formValidation).every((element) => element === true)
      ? setDisableButton(false)
      : setDisableButton(true);
  }, [props.isOpen, props.formValidation]);

  React.useEffect(() => {
    if (props.isOpen) {
      setButtonDisabled();
      setShowError(false);
      setErrorText("Placeholder");
      return;
    }
    formRef.current.reset();
  }, [props.isOpen]);

  React.useEffect(() => {
    setButtonDisabled();
  }, [props.formValidation]);

  const submit = (e) => {
    disableButton
      ? e.preventDefualt()
      : props.submit(e).catch((err) => {
          setShowError(true);
          JSON.stringify(err).includes("409")
            ? setErrorText("Email already in use")
            : setErrorText("Error, Please try again");
        });
  };

  return (
    <Overlay isOpen={props.isOpen} closePopups={props.closePopups}>
      <div
        className={
          props.isOpen
            ? "overlay__form overlay__element overlay__element_opened"
            : "overlay__form overlay__element"
        }
      >
        <form
          name={props.name}
          ref={formRef}
          className="form"
          onSubmit={submit}
        >
          <h2 className="form__title">{props.header}</h2>
          <fieldset className="form__inputs">
            {React.Children.map(children, (child, i) => {
              return (
                <div className="form__row" key={i}>
                  {child}
                </div>
              );
            })}
          </fieldset>
          <p
            className={
              "form__error " + (showError ? "form__error_visible" : "")
            }
          >
            {errorText}
          </p>
          <Button
            type="submit"
            disabled={disableButton}
            className="form__button form__button_type_save button"
          >
            {props.buttonText}
          </Button>
          <p className="form__link">
            or{" "}
            <span onClick={props.switchPopups} className="form__clickable">
              {props.linkText}
            </span>
          </p>
        </form>
        <Button
          type="button"
          className="overlay__button overlay__button_type_close button"
          onClick={props.closePopups}
        ></Button>
      </div>
    </Overlay>
  );
}
