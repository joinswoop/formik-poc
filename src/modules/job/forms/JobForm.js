import React from 'react';
import { Field } from 'formik';
import StandardForm from 'components/form/StandardForm';
import PONumberField from 'components/form/PONumberField';
import RefNumberField from 'components/form/RefNumberField';
import VehicleIssueField from 'components/form/VehicleIssueField';
import StandardInput from 'components/form/StandardInput';
import asyncSubmission from 'utils/formHelper';

import validationSchema from '../validationSchema';
// function responsible for processing incoming existing records for form consumption
// E.g. remove keys that will not be submitted back to the server, such as updatedAt, createdAt
const initialValues = item => {
  if (item) {
    const data = { ...item };
    return data;
  } else {
    return {
      name: '',
      poNumber: '',
      refNumber: ''
    };
  }
};

// transformValues allows you to process data before it gets sent to validation or to the server
// This can be used, e.g. if you create a related object, in the form (E.g. a car with a license plate that gets persisted on the fly)
// and you only want to send the resulting server side generated id
const transformValues = values => {
  const data = { ...values };
  return data;
};

/*
 * The Job Form can be mostly identical on both native and web. The only relevant difference is that on the web, 
 * Formik uses a <form onSubmit={handleSubmit}> handler to submit a form, whereas on mobile there is no <form /> and you need to implement this
 * <Button onPress={handleSubmit} />
 */
const JobForm = ({ item, onSubmitSuccess }) => (
  <StandardForm
    onSubmit={asyncSubmission}
    initialValues={initialValues(item)}
    validationSchema={validationSchema}
    transformValues={transformValues}
    render={({
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting
    }) => (
      <form onSubmit={handleSubmit}>
        <Field
          id="name"
          label="Name"
          placeholder="Name"
          name="name"
          component={StandardInput}
        />
        <Field id="poNumber" name="poNumber" component={PONumberField} />
        <Field id="refNumber" name="refNumber" component={RefNumberField} />
        <Field
          id="vehicleIssue"
          name="vehicleIssue"
          component={VehicleIssueField}
        />
        <button type="submit">Submit</button>
      </form>
    )}
  />
);

export default JobForm;
