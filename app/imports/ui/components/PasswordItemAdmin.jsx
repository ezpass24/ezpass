import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Password (Admin) table. See pages/ListPasswordAdmin.jsx. */
const PasswordItemAdmin = ({ password }) => (
  <tr>
    <td>{password.name}</td>
    <td>{password.quantity}</td>
    <td>{password.condition}</td>
    <td>{password.owner}</td>
  </tr>
);

// Require a document to be passed to this component.
PasswordItemAdmin.propTypes = {
  password: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default PasswordItemAdmin;
