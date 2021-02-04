import React from "react";
import { useRecoilValue } from "recoil";
import { posts } from "../atoms/posts";
import { users } from "../atoms/users";
import Comment from "./Comment";
// import Like from "./Like";
import RemovePost from "./RemovePost";

const PostMap = () => {
  const postList = useRecoilValue(posts);
  const userList = useRecoilValue(users);

  const displayPosts = (postList) => {
    return postList.map((post) => (
      <>
        <div class="card text-dark bg-light mb-3" style={{ width: "100%" }}>
          <div class="card-header">
            {userList[post.creatorId].name} a posté :
            <RemovePost id={post.id} />{" "}
          </div>
          <div class="card-body">
            <h5 class="card-title">Time</h5>
            <p class="card-text">{post.text}</p>
            <Comment postId={post.id} />
          </div>
        </div>
      </>
    ));
  };

  return (
    <div className="container">
      <ul className="post-list">{displayPosts(postList)}</ul>
    </div>
  );
};

export default PostMap;
