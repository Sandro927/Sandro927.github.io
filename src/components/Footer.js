import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
    <Row>
      <Col md="4" className="footer-copywright">
        <h3>Designed and Developed by Soumyajit Behera</h3>
      </Col>
      <Col md="4" className="footer-copywright">
        <h3>Copyright © {year} SB</h3>
      </Col>
      <Col md="4" className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/Sandro927"
              style={{ color: "white" }}
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/AlejandroMandala/"
              style={{ color: "white" }}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
  );
}

export default Footer;
