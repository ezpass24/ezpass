import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FcCheckmark } from 'react-icons/fc';
import { FaTools } from 'react-icons/fa';
import { IoLockClosedSharp } from 'react-icons/io5';
import { PiPasswordBold } from 'react-icons/pi';
import { MdOutlineAssignment } from 'react-icons/md';
import { FaRegFolderOpen } from 'react-icons/fa6';

const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    {/* Header */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <Image rounded src="/images/ezlogo.png" width="500px" alt="logo" />
      </Col>
    </Row>

    {/* Welcome Section */}
    <Row className="align-middle text-center mb-4 p-5">
      <Col>
        <h1 className="section-title">Welcome to EZPass!</h1>
        <Row>
          <Col />
          <Col sm={3}>
            <p className="section-text">EZPass simplifies your digital life by providing a centralized environment
              to store and manage your passwords for various platforms.
            </p>
          </Col>
          <Col />
        </Row>
      </Col>
    </Row>

    {/* Why, How, Security & Privacy Sections */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h2>Why Choose EZPass?</h2>
        <h7>Centralized Password Management <FcCheckmark size={30} />
          <br />
          Enhanced Security <FcCheckmark size={30} />
          <br />
          User-Friendly Interface <FcCheckmark size={30} />
          <br />
          Peace of Mind <FcCheckmark size={30} />
        </h7>
      </Col>
      <Col>
        <h2><FaTools /> How It Works <FaTools /></h2>
        <p>
          Sign Up <MdOutlineAssignment size={30} />
          <br />
          Add Passwords <PiPasswordBold size={30} />
          <br />
          Access Anytime <FaRegFolderOpen size={30} />
        </p>
      </Col>
      <Col>
        <h2 className><IoLockClosedSharp /> Security & Privacy <IoLockClosedSharp /></h2>
        <Row><Col /><Col sm={6}>At EZPass, your security is our top priority. We employ industry-standard security measures to protect your data.</Col><Col /></Row>
      </Col>
    </Row>

    {/* Get Started Section */}
    <Row className="align-middle text-center mb-4 p-5">
      <Col>
        <h2>Get Started</h2>
        <h5>Sign up free today!</h5>
        <Button variant="primary" className="btn-get-started">Sign Up Now</Button>
      </Col>
    </Row>

    {/* About Us Section */}
    <Row className="align-middle text-center mb-4">
      <Col>
        <h3 className="section-title">About Us</h3>
        <Row>
          <Col />
          <Col sm={2}>
            <small>
              EZPass is brought to you by Richard Baltazar, Christopher Pascal, Brayden Danielson, and Kanai Gooding.
            </small>
          </Col>
          <Col />
        </Row>
      </Col>
    </Row>

  </Container>
);

export default Landing;
