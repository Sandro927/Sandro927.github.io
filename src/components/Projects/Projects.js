import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pygame_shooter from "../../Assets/Projects/pygame.png";
import cshooter from "../../Assets/Projects/CShooter.png";
import amaclone from "../../Assets/Projects/amaclone.png";
import googleplay from "../../Assets/Projects/GooglePlay.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pygame_shooter}
              title="2D Space Shooting Game written in Python"
              description="This application is a 2D Space shooting game built with python using the Pygame library and applies Object-Oriented programming techniques. Functionality includes player and enemy movement, weapons firing, a health bar,
              a level system and a main menu screen. Project functionality and assets come from an instructional youtube video on the basics of Pygame."
              link="https://github.com/Sandro927/2D-Pygame-Space-Shooting-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cshooter}
              title="2D Space Shooting Game written in C# using Unity"
              description="This application is a 2D Space shooting game built in Unity with C#. The core functionality of this application is similar to my Pygame project however it adds many more complex features such as animations,
              sounds, power ups, and high score. The functionality and assets for this project are from an Udemy course on the fundamentals of 2D Unity and C#. Multiplayer functionality coming soon."
              link="https://github.com/Sandro927/2D-Unity-Shooter-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleplay}
              title="Google Play and App store analysis"
              description="This project was the first milestone project for my Dataquest.io online Data Science course. The project analyzes data from a csv file for over 17,000 mobile applications from the Google Play and App Store to determine various patterns and trends.
              We concluded by determining that the most proftiable type of app to build for either store would be an based off of a popular book."
              link="https://github.com/Sandro927/Dataquest-Course-Work/tree/main/Google%20Play%20and%20App%20Store%20Analysis%20Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amaclone}
              isPriv={true}
              title='Online shopping website'
              description="This project was the final assigment for my Web Development class in my final semester. It is an onine shopping website based off of Amazon with functionality inlcuding user authentication and authorization, a shopping cart, and database connectivity.
              The web application uses Node.js, Express, MongoDB, custom authentication and bootstrap. At the request of my professor the source code for this assigment is kept private." 
              link="https://enigmatic-reef-79805.herokuapp.com/"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
