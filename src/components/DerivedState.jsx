import { useState } from "react";
//const users =

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 24 },
    { name: "Riya", age: 30 },
    { name: "Sachin", age: 35 },
    { name: "Rohan", age: 44 },
  ]);

  console.log(users);
  const userCount = users.length;
  //derived state  : anverage age of user
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div className="main-div">
      <h1>User List</h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={index}>
              {curElem.name} - {curElem.age} year old
            </li>
          );
        })}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age : {averageAge}</p>
    </div>
  );
};
