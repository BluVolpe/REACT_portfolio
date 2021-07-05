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
        <h2 >Work</h2>
        <div >
          <Project id="project-1" title="Project 1" link="https://da-beatz.herokuapp.com/" image={DaBeatz} />
          <Project id="project-2" title="Project 2" link="https://adamalcantara.github.io/cinepare/" image={CinePare} />
          <Project id="project-3" title="Project 3" link="https://bluvolpe.github.io/code_quiz/" image={CodeQuiz} />
          <Project id="project-4" title="Project 4" link="https://bluvolpe.github.io/weather-dashboard/" image={WeatherDashboard} />
        </div>
      </section>
  );
}

export default Work;