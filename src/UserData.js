import React from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import axios from 'axios';
import FormError from './FormError';

const UserData = () => {
  const { register, errors, handleSubmit } = useForm();
  const submitUserData = (data) => {
    axios.post('api/users', data);
  };

  return (
    <form onSubmit={handleSubmit((data) => submitUserData(data))}>
      <h1>User Data</h1>
      <label>
        Name
        <input name="name" type="text" ref={register({ required: 'Required' })} />
        <FormError errors={errors.name} />
      </label>
      <label>
        Email
        <input name="email" ref={register({ required: 'Required' })} />
        <FormError errors={errors.email} />
      </label>
      <label>
        Phone
        <input name="phoneNumber" ref={register({ required: 'Required' })} />
        <FormError errors={errors.phoneNumber} />
      </label>
      <label>
        Date of Birth
        <input
          type="date"
          name="dateOfBirth"
          max={moment().format('DD-MM-YYYY')}
          ref={register({ required: 'Required' })}
        />
        <FormError errors={errors.dateOfBirth} />
      </label>
      <label>
        Address
        <input name="address" ref={register({ required: 'Required' })} />
        <FormError errors={errors.address} />
      </label>
      <input type="submit" />
    </form>
  );
};
export default UserData;
