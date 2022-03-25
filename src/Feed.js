import React from "react";
import Post from "./Post";

export const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
