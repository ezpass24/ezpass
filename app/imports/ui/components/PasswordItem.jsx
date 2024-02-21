import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Password table. See pages/ListPassword.jsx. */
const PasswordItem = ({ password }) => (
  <tr>
    <td>{password.name}</td>
    <td>{password.quantity}</td>
    <td>{password.condition}</td>
    <td>
      <Link to={`/edit/${password._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
PasswordItem.propTypes = {
  password: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default PasswordItem;
