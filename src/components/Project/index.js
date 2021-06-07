import React from "react";
import "./project.css";

function Project(props) {
    return (
        <div>
            <div>
              <h3>{props.title}</h3>
              <a href={props.link}>
                <img src={props.image} id="picOne" alt="loading failed"/>
              </a>
            </div>
        </div>
    );
}

export default Project;