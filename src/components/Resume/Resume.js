import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
 
 

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={"https://www.linkedin.com/in/AlejandroMandala/"} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Contact me for a copy of my Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Senior Operations Advisor, Tesla"
              date="May 2018 - June 2020"
              content={[
                "Successfully led all daily operational aspects in the sale and delivery of new and used electric vehicles and home energy solutions",
                "Performed daily facility and documentation audits to maintain consistency and efficiency.",
              ]}
            />

            <Resumecontent
              title="Sales and Account Manager, Shaw Communications"
              date="March 2013 - May 2018"
              content={[
                "Led and executed all phases of sale and support of mobile wireless accounts for both consumer and corporate accounts. This includes wireless services, hardware, and support packages.",
                "Collaborated effectively with stakeholders of all levels in the organization to ensure top quality results"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="College Diploma, Computer Programming - Seneca College"
              date="Graduated August - 2020"
              content={[`GPA: 3.8`]}
            />
           
            <h3 className="resume-title">Extracurriculars and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Tutored students in C++, Unix, MySQL and Web development in my final 3 semesters of College",
                "Currently enrolled in Dataquest.io online Data Science course",
                "Completed over 150 hours of continued learning through various online learning platforms such as Udemy and Linkedin Learning"
               
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={"https://www.linkedin.com/in/AlejandroMandala/"} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Contact me for a copy of my Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
