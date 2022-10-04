import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";
const Friend = ({ friend }) => {
  const { name, phone, email, username, id } = friend;
  return (
    <div className="friendStyle">
      <h3 className="text-xl font-bold">Name : {name}</h3>
      <p>
        Username : <Link to={`/friends/${id}`}> {username}</Link>
      </p>
      <p>Phone : {phone}</p>
      <b>Email : {email}</b>
    </div>
  );
};
export default Friend;
