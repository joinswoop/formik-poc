import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const Select = ({
  id,
  options,
  name,
  label,
  errors,
  touched,
  isVisible,
  ...rest
}) => (
  <div style={{ display: isVisible ? 'block' : 'none' }}>
    <label>{label}</label>
    <select id={id} {...rest}>
      {options.map(option => (
        <option key={`${option.label}-${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <ErrorMessage
      name={name}
      render={msg => <div className="form-error">{msg}</div>}
    />
  </div>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isVisible: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  )
};

Select.defaultProps = {
  errors: {},
  touched: {},
  isVisible: true
};

export default Select;
