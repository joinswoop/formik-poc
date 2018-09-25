import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import FormWrapper from 'components/form-primitives/FormWrapper';

const StandardForm = ({
  initialValues,
  render,
  transformValues,
  validation,
  validationSchema,
  onSubmit,
  onSubmitSuccess,
  onSubmitFail,
  children
}) => (
  <Formik
    initialValues={initialValues}
    validation={validation}
    validationSchema={validationSchema}
    onSubmit={(values, form) => onSubmit(transformValues(values), form)}
    render={props => <FormWrapper {...props}>{render(props)}</FormWrapper>}
  />
);

StandardForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  validation: PropTypes.func,
  render: PropTypes.func,
  onSubmitSuccess: PropTypes.func,
  onSubmitFail: PropTypes.func,
  transformValues: PropTypes.func
};

StandardForm.defaultProps = {
  initialValues: undefined,
  validationSchema: undefined,
  validation: undefined,
  render: () => null,
  onSubmitSuccess: () => undefined,
  onSubmitFail: () => undefined,
  transformValues: data => data
};
export default StandardForm;
