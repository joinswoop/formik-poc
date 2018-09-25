import React from 'react';
import Select from 'components/form-primitives/Select';

const VehicleIssueField = ({ id, field, form }) => (
  <Select
    id={id}
    placeholder="Select the issue"
    label="Vehicle Issue"
    options={vehicleIssues}
    {...field}
    required={isRequired()}
    readOnly={isReadOnly()}
    isVisible={isVisible()}
  />
);

const vehicleIssues = [
  {
    label: 'Flat Tire',
    value: 25
  },
  {
    label: 'Need a jump start',
    value: 15
  }
];

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

export default VehicleIssueField;
