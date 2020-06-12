import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = ({ users }) => {
  if (!users.length) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
