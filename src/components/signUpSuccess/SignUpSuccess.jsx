import React from "react";
import "./SignUpSuccess.css";
import Overlay from "../overlay/Overlay";
import Button from "../button/Button";

export default function SignUpSuccess(props) {
  return (
    <Overlay isOpen={props.isOpen} closePopups={props.closePopups}>
      <div className="signup-success">
        <h3 className="signup-success__title">
          Registration successfully completed!
        </h3>
        <p className="signup-success__link" onClick={props.switchPopups}>
          Sign in
        </p>
        <Button
          type="button"
          className="overlay__button overlay__button_type_close button"
          onClick={props.closePopups}
        ></Button>
      </div>
    </Overlay>
  );
}
