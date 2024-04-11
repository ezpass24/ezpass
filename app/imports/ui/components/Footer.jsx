import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Col className="text-center p-1">
        <Image as={NavLink} to="/" rounded src="/images/ezlogo.png" width="160px" alt="logo" />
        {' '}
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        {' '}
        <br />
        <p className="footer-text">© 2024 EZPass24. All rights reserved. </p>
        {/* | <a href="#" className="footer-link">Privacy Policy</a> | <a href="#" className="footer-link">Terms of Service</a> */}
      </Col>
    </Container>
  </footer>
);

export default Footer;
