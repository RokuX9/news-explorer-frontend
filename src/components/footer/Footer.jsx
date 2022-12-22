import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer">
      <p className="footer__copyright">© 2021 Dean News, Powered by News API</p>
      <div className="footer__container">
        <div className="footer__links">
          <NavLink to="/" className="footer__link">
            Home
          </NavLink>
          <a href="https://www.practicum.com/" className="footer__link">
            Practicum
          </a>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/RokuX9"
            className="footer__link footer__icon footer__icon_type_github"
          ></a>
          <a
            href="https://linkedin.com/in/dean-nash"
            className="footer__link footer__icon footer__icon_type_linkedin"
          ></a>
        </div>
      </div>
    </div>
  );
}
