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
            Up and coming developer, I'm very excited about bringing ideas into
            reality. I primarly foucs on web development, but enjoy expanding my
            horizons and learn more about computers and electronics in general.
          </p>
          <p className="about-me__paragraph">
            I'm very dedicated to my job and a very presistent preson, I will
            not give up until the goal has been achived. That is why I believe
            you should choose me for your next project!
          </p>
        </div>
      </div>
    </div>
  );
}
