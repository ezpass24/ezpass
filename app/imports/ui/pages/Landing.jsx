import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Landing.css'; // Assuming you have a CSS file named Landing.css

const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    {/* Header */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h1 className="header-title" id="header">EZPass24</h1>
        <p className="header-subtitle">Securely manage your passwords in one place.</p>
      </Col>
    </Row>

    {/* Welcome Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2 className="section-title">Welcome to EZPass!</h2>
        <p className="section-text">EZPass simplifies your digital life by providing a centralized environment to store and manage your passwords for various platforms.</p>
      </Col>
    </Row>

    {/* Why Choose EZPass Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2 className="section-title">Why Choose EZPass?</h2>
        <ul className="section-list">
          <li>Centralized Password Management</li>
          <li>Enhanced Security</li>
          <li>User-Friendly Interface</li>
          <li>Peace of Mind</li>
        </ul>
      </Col>
    </Row>

    {/* How It Works Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2 className="section-title">How It Works</h2>
        <ol className="section-list">
          <li>Sign Up</li>
          <li>Add Passwords</li>
          <li>Access Anytime</li>
        </ol>
      </Col>
    </Row>

    {/* Security & Privacy Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2 className="section-title">Security & Privacy</h2>
        <p className="section-text">At EZPass, your security is our top priority. We employ industry-standard security measures to protect your data.</p>
      </Col>
    </Row>

    {/* Get Started Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2 className="section-title">Get Started</h2>
        <Button variant="primary" className="btn-get-started">Sign Up Now</Button>
      </Col>
    </Row>

    {/* About Us Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2 className="section-title">About Us</h2>
        <p className="section-text">EZPass is brought to you by Richard Baltazar, Christopher Pascal, Brayden Danielson, and Kanai Gooding.</p>
      </Col>
    </Row>

    {/* Contact Us Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2 className="section-title">Contact Us</h2>
        <Button variant="secondary" className="btn-contact-us">Contact Us</Button>
      </Col>
    </Row>

    {/* Footer */}
    <Row className="align-middle text-center">
      <Col>
        <p className="footer-text">© 2024 EZPass24. All rights reserved. </p>
        {/*| <a href="#" className="footer-link">Privacy Policy</a> | <a href="#" className="footer-link">Terms of Service</a>*/}
      </Col>
    </Row>
  </Container>
);

export default Landing;
