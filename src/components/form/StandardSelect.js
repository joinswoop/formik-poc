import React from 'react';
import Select from 'components/form-primitives/Select';

const StandardSelect = ({ id, label, options, placeholder, field, form }) => (
  <Select
    id={id}
    label={label}
    placeholder={placeholder}
    options={options}
    {...field}
  />
);

export default StandardSelect;
