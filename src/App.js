import React, { useState } from 'react';

import Form from './components/Form/Form';
import Card from './components/User/Card';

function App() {
  const [userList, setUserList] = useState([]);

  const userListHandler = (data) => {
    setUserList((prev) => {
      return [data, ...prev];
    });
  };

  const userDeleteHandler = (val) => {
    console.log('deleted!', val);
    const arr = userList.filter((item) => {
      return item.age !== val;
    });
    setUserList(arr);
  };

  return (
    <div>
      <Form onUserListHandler={userListHandler} />
      {userList.map((user) => {
        return (
          <Card
            key={user.age}
            username={user.username}
            age={user.age}
            onUserDelete={userDeleteHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
