import React from 'react';
import Input from 'components/form-primitives/Input';

const StandardInput = ({ id, label, placeholder, field, form }) => (
  <Input id={id} label={label} placeholder={placeholder} {...field} />
);

export default StandardInput;
