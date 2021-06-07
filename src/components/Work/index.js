import React from "react";
import './work.css';
import Project from "../Project"
import DaBeatz from "../../images/DaBeatz.jpg";
import CinePare from "../../images/CinePare.png";
import CodeQuiz from "../../images/CodeQuiz.png";
import WeatherDashboard from "../../images/WeatherDashboard.png";

function Work() {
  return (
    <section className="page-section" id="work">
        <h2>Work</h2>
        <div>
          <Project title="Project 1" link="https://github.com/Murrmaid4/daBeatz" image={DaBeatz} />
          <Project title="Project 2" link="https://adamalcantara.github.io/cinepare/" image={CinePare} />
          <Project title="Project 3" link="https://bluvolpe.github.io/code_quiz/" image={CodeQuiz} />
          <Project title="Project 4" link="https://bluvolpe.github.io/weather-dashboard/" image={WeatherDashboard} />
        </div>
      </section>
  );
}

export default Work;