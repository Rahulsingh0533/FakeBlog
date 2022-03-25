import React from "react";

function NewPost(props) {
  const { postTitle, postBody, setPostTitle, setPostBody, handlePostSubmit } =
    props;
  return (
    <div className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handlePostSubmit}>
        <lable htmlFor={postTitle}>Title:</lable>
        <input
          type="text"
          id={postTitle}
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <lable htmlFor={postBody}>Enter Post Content:</lable>
        <textarea
          id={postBody}
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default NewPost;
