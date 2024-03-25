import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, DateField, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Passwords } from '../../api/password/Password';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  password: String,
  lastModified: Date,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddPassword page for adding a document. */
const AddPassword = () => {

  const today = new Date();
  today.setHours(today.getHours() - 10); // UTC to HST
  today.getDate();

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { name, password, lastModified } = data;
    const owner = Meteor.user().username;
    Passwords.collection.insert(
      { name, password, lastModified, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Password</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <TextField name="password" />
                <DateField name="lastModified" value={today} disabled />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPassword;
