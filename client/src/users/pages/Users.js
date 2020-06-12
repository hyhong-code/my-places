import React from "react";
import UsersList from "../components/UsersList";

const USERS = [
  {
    id: "u1",
    name: "Nicolette",
    image:
      "https://images.unsplash.com/photo-1509675129439-5c3e857f52e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    places: 3,
  },
];

const Users = () => {
  return <UsersList users={USERS} />;
};

export default Users;
