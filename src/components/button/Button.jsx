import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      className={"button " + props.className}
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      id={
        props.disabled
          ? !props.overide
            ? "button_inactive"
            : "button_inactive_page"
          : ""
      }
    >
      {props.children}
    </button>
  );
}
