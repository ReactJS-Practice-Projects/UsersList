import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
 
  //we get previous state with input parameter - prevUsersList and then return new state as an array
  //In order to return the user list as an array we use [] square brackets  
  //we use spread operator ...prevUsersList to copy all elements (user list) from the prior array to the new array 
  //then we add a new object by using curly braces {} with name, age and id to the array 
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
