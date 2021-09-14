import React from 'react';

const Card = (props) => {
  const deleteUser = () => {
    props.onUserDelete(props.age);
  };

  return (
    <div onClick={deleteUser} style={{ border: '1px solid #ccc' }}>
      <p>
        {props.username} ({props.age} years old)
      </p>
    </div>
  );
};

export default Card;
