import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/AS-Logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github-icon.jpg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/feed/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ankit972152"><img src={github} alt="Icon" /></a>
              <a href="https://www.instagram.com/ankitrajput4523"><img src={navIcon3} alt="Icon" /></a>
            </div>
           <p>&copy; 2025 Ankit Kumar Singh. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
