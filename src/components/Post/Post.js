import React from "react";

const Post = ({ post }) => {
  //   console.log(post);
  const { title, body, id } = post;
  return (
    <div className="border rounded border-emerald-300 m-4 p-3">
      <h3 className="text-2xl font-bold">Id : {id}</h3>
      <h5>Tittle : {title}</h5>
      <p>Tittle : {body}</p>
      <button className="">Click on me</button>
    </div>
  );
};

export default Post;
