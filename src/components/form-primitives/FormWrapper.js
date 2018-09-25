import React from 'react';

// Component responsible for displaying general errors and other form relevant content that's always in the same place
// On mobile this could do nothing and an exception could be displayed as a Toast, outside of the Form tree
const FormWrapper = props => <React.Fragment>{props.children}</React.Fragment>;

export default FormWrapper;
