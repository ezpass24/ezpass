import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Passwords } from '../../api/password/Password';
import PasswordItem from '../components/PasswordItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all the Password documents. Use <PasswordItem> to render each row. */
const ListPassword = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, passwords } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Password documents.
    const subscription = Meteor.subscribe(Passwords.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Password documents
    const passwordItems = Passwords.collection.find({}).fetch();
    return {
      passwords: passwordItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={5}>
          <Col className="text-center">
            <h2>List Password</h2>
          </Col>
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

export default ListPassword;
