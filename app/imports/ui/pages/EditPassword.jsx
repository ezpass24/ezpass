import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Passwords } from '../../api/password/Password';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Passwords.schema);

/* Renders the EditPassword page for editing a single document. */
const EditPassword = () => {

  const today = new Date();

  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditPassword', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Password documents.
    const subscription = Meteor.subscribe(Passwords.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Passwords.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditPassword', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { name, password, lastModified } = data;
    Passwords.collection.update(_id, { $set: { name, password, lastModified } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Password</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="name" id="edit-pass-name" />
                <TextField name="password" id="edit-pass-pass" />
                <TextField name="lastModified" value={today.toString().substring(4, 24)} disabled />
                <SubmitField value="Submit" id="edit-pass-submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditPassword;
