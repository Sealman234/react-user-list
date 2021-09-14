import React, { useState } from 'react';

import FormInput from './FormInput';
import Button from '../UI/Button';

const Form = (props) => {
  const [form, setForm] = useState({});

  const usernameChangeHandler = (value) => {
    setForm((prev) => {
      return { ...prev, username: value };
    });
  };

  const ageChangeHandler = (value) => {
    setForm((prev) => {
      return { ...prev, age: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    if (form.username && form.age) {
      props.onUserListHandler(form);
    } else {
      console.log('Error!');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>form.username: {form.username}</p>
      <p>form.age: {form.age}</p>
      <FormInput
        label="username"
        type="text"
        max="10"
        onChangeHandler={usernameChangeHandler}
      >
        Username
      </FormInput>
      <FormInput
        label="age"
        type="tel"
        max="3"
        onChangeHandler={ageChangeHandler}
      >
        Age (Years)
      </FormInput>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default Form;
