import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profiles/Profile';

/* A simple static component to render some text for the landing page. */
const MyProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, profiles } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Profiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const profileItems = Profiles.collection.find({}).fetch();
    return {
      profiles: profileItems,
      ready: rdy,
    };
  }, []);
  const userProfile = profiles.find(profile => profile.owner === Meteor.user().username);
  return (ready ? (
    <Container className="py-3">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={7} className="d-flex justify-content-center align-items-center" >
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <p>{userProfile.email}</p>
          <p>{userProfile.securityQuestion}</p>
        </Col>
        <Col md={5} className="text-center">
          <p>{userProfile.password}</p>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default MyProfile;
