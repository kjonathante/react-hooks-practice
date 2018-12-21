import React, { useState, useEffect } from "react";

function GitHubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data); // set users in state
      });
  }, []); // empty array because we only run once

  return (
    <div className="section">
      {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.username}</h5>
        </div>
      ))}
    </div>
    // <h1>Hello</h1>
  );
}

export default GitHubUsers;
