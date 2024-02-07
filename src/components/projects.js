import React from 'react';
import "./style.css";
import "./mediaqueries.css";

import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import ArrowPic from "../assets/arrow.png";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={Project1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={Project2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={Project3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/')}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={ArrowPic}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#contact')}
      />
    </section>
  );
};

export default ProjectsSection;
