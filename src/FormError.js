import React from 'react';

const FormError = ({ errors }) => <div className="error">{errors ? errors.message : ' '}</div>;

export default FormError;
