import React from "react";
import "./AboutMe.css";

export default function AboutMe(props) {
  return (
    <div className="about-me">
      <div className="about-me__picture"></div>
      <div className="about-me__bio">
        <h2 className="about-me__title">About the author</h2>
        <div className="about-me__paragraphs">
          <p className="about-me__paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about-me__paragraph">
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </div>
  );
}
