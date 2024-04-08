import React from 'react';
import {Col, Container, Image, Nav, Row} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Col className="text-center">
        <Image as={NavLink} to="/" rounded src="/images/ezlogo.png" width="160px" alt="logo" />
        {' '}
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        {' '}
        <br />
      </Col>
    </Container>
  </footer>
);

export default Footer;
