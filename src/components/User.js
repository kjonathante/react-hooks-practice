import React, { useState, useEffect } from "react";

function User() {
  const [user, setUser] = useState({});

  function handleChange(user) {
    //console.log(user)
    setUser(user);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(json => handleChange(json));
  }, []);

  return <div>{user.name}</div>;
}

export default User;
