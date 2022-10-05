import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  //   console.log(friend);
  return (
    <div>
      <h3>Friend Details Page ....</h3>
      <p>Name : {friend.username}</p>
      <p>Phone : {friend.phone}</p>
      <p>Email : {friend.email}</p>
    </div>
  );
};

export default FriendDetails;
