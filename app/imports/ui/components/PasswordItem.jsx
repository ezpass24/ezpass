import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Password table. See pages/ListPassword.jsx. */
const PasswordItem = ({ password }) => (
  <tr>
    <td>{password.name}</td>
    <td>{password.password}</td>
    <td>{password.lastModified}</td>
    <td>
      <Link to={`/editPassword/${password._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
PasswordItem.propTypes = {
  password: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
    lastModified: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default PasswordItem;
