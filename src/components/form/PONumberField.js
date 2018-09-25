import React from 'react';
import Input from 'components/form-primitives/Input';

const PONumberField = ({ id, field, form }) => (
  <Input
    id={id}
    placeholder="pon-pon-pon"
    label="PONumber"
    {...field}
    required={isRequired()}
    readOnly={isReadOnly()}
    isVisible={isVisible()}
  />
);

// Business logic can be integrated into the component to process visibility, readonly, required
export const isReadOnly = () => {
  return false;
};

export const isRequired = () => {
  return false;
};

export const isVisible = () => {
  return true;
};

export default PONumberField;
