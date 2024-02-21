import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Passwords } from '../../api/password/Password';
import PasswordItemAdmin from '../components/PasswordItemAdmin';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Password documents. Use <PasswordItemAdmin> to render each row. */
const ListPasswordAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { passwords, ready } = useTracker(() => {
    // Get access to Password documents.
    const subscription = Meteor.subscribe(Passwords.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Password documents
    const items = Passwords.collection.find({}).fetch();
    return {
      passwords: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center"><h2>List Password (Admin)</h2></Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Condition</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {passwords.map((password) => <PasswordItemAdmin key={password._id} password={password} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPasswordAdmin;
