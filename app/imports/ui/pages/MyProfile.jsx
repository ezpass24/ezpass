import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const MyProfile = () => (
  <Container className="mb-4">
    <Row className="mt-4">
      <Col lg={4}>
        <Card className="mb-4 rounded border border-dark card_profile antw">
          <Card.Body className="text-center">
            <div className="d-flex justify-content-center mb-4">
              <img
                src=""
                alt="avatar"
                className="rounded-circle border border-dark"
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <h3 className="mb-1 mt-3">1</h3>
            <p className="text-muted mb-4">1</p>
          </Card.Body>
        </Card>
        <Card className="mb-4 mt-4 border border-dark antw">
          <Card.Body>
            <Row className="mb-2">
              <Col sm="3">
                <Card.Text>Name</Card.Text>
              </Col>
              <Col sm="9">
                <Card.Text className="text-muted">1</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <Card.Text>E-mail</Card.Text>
              </Col>
              <Col sm="9">
                <Card.Text className="text-muted">1</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default MyProfile;
