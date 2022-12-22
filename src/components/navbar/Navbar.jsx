import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  const [openBlock, setOpenBlock] = React.useState(false);
  const setBlockOpened = () => {
    setOpenBlock(true);
  };
  const setBlockClosed = () => {
    setOpenBlock(false);
  };
  return (
    <div
      className={
        "navbar" +
        (props.location.pathname === "/saved-news" ? " navbar_black" : "")
      }
    >
      <div className="navbar__borders"></div>
      <h1
        className={
          "navbar__header" +
          (props.location.pathname === "/saved-news" && !openBlock
            ? " navbar__header_black"
            : "")
        }
      >
        NewsExplorer
      </h1>
      <button
        className={
          "navbar__hamburger " +
          (props.location.pathname === "/saved-news"
            ? "navbar__hamburger_type_black "
            : "") +
          (openBlock ? "navbar__hamburger_opened" : "")
        }
        onClick={openBlock ? setBlockClosed : setBlockOpened}
      ></button>
      <div
        className={"navbar__block " + (openBlock ? "navbar__block_opened" : "")}
      >
        <NavLink
          to="/"
          className={
            "navbar__link " +
            (props.location.pathname === "/saved-news" && !openBlock
              ? "navbar__link_type_black"
              : "navbar__link_type_active")
          }
        >
          Home
        </NavLink>
        {props.loggedIn && (
          <NavLink
            to="/saved-news"
            className={
              "navbar__link" +
              (props.location.pathname === "/saved-news" && !openBlock
                ? " navbar__link_type_black navbar__link_type_active navbar__link_type_border-black"
                : "")
            }
          >
            Saved News
          </NavLink>
        )}
        {props.location.pathname === "/" && (
          <button
            className="navbar__link navbar__link_type_sign-in"
            onClick={props.openSignIn}
          >
            Sign In
          </button>
        )}
        {props.location.pathname === "/saved-news" && (
          <button
            className={
              "navbar__link navbar__link_type_logout" +
              (props.location.pathname === "/saved-news" && !openBlock
                ? " navbar__link_type_black navbar__link_type_border-black"
                : "")
            }
          >
            Dean{" "}
            <div
              className={
                "navbar__logout-icon " +
                (props.location.pathname === "/saved-news" && !openBlock
                  ? "navbar__logout-icon_black"
                  : "")
              }
            ></div>
          </button>
        )}
      </div>
    </div>
  );
}
