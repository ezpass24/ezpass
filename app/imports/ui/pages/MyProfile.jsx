import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Col, Container, Row, Card, Table, Image} from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profiles/Profile';
import { Passwords } from '../../api/password/Password';
import PasswordItem from '../components/PasswordItem';

/* A simple static component to render some text for the landing page. */
const MyProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, profiles, passwords } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to documents.
    const subscription = Meteor.subscribe(Profiles.userPublicationName);
    const subscription2 = Meteor.subscribe(Passwords.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the documents
    const profileItems = Profiles.collection.find({}).fetch();
    const passwordItems = Passwords.collection.find({}).fetch();
    return {
      passwords: passwordItems,
      profiles: profileItems,
      ready: rdy,
    };
  }, []);
  const userProfile = profiles.find(profile => profile.owner === Meteor.user().username);
  return (ready ? (
    <Container className="py-3">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <Card style={{ width: '18rem' }}>
            <Card.Body className="text-center">
              <Card.Title><p>{userProfile.email}</p></Card.Title>
              <Image src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" width="175px" />
              <Card.Subtitle className="mb-2 text-muted" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="text-center">
          <Card className="mb-4 border border-black antw">
            <Card.Header as="h3" className="text-center">Passwords</Card.Header>
          </Card>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Password</th>
                <th>Last Modified</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {passwords.map((password) => <PasswordItem key={password._id} password={password} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default MyProfile;
