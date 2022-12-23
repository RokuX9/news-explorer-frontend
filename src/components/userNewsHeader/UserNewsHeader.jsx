import React from "react";
import "./UserNewsHeader.css";

export default function UserNewsHeader(props) {
  return (
    <div className="user-header">
      <h2 className="user-header__title">Saved articles</h2>
      <p className="user-header__subtitle">Elise, you have 5 saved articles</p>
      <p className="user-header__paragraph">
        By keywords:{" "}
        <span className="user-header__keywords">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </div>
  );
}
