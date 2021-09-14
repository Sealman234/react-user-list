import React, { useState } from 'react';

const FormInput = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  const changeHandler = (event) => {
    if (props.label === 'username') {
      setUsername(event.target.value);
    } else {
      setAge(event.target.value);
    }
    props.onChangeHandler(event.target.value);
  };

  return (
    <div>
      <label htmlFor={props.label}>{props.children}</label>
      <input
        type={props.type}
        id={props.label}
        maxLength={props.max}
        onChange={changeHandler}
      ></input>
    </div>
  );
};

export default FormInput;
