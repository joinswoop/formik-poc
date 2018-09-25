import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const Input = ({ id, name, label, errors, touched, isVisible, ...rest }) => (
  <div style={{ display: isVisible ? 'block' : 'none' }}>
    <label>{label}</label>
    <input id={id} name={name} {...rest} />
    <ErrorMessage
      name={name}
      render={msg => <div className="form-error">{msg}</div>}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isVisible: PropTypes.bool
};

Input.defaultProps = {
  errors: undefined,
  touched: {},
  isVisible: true
};

export default Input;
