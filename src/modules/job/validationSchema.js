import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  poNumber: yup
    .string()
    .min(2, 'Too Short!')
    .max(5, 'Too Long!')
    .required('Required'),
  refNumber: yup
    .string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  vehicleIssue: yup
    .mixed()
    .oneOf(['15', '25'])
    .required('Required')
});

export default validationSchema;
