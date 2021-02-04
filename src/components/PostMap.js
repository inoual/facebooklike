import React from "react";
import { useRecoilValue } from "recoil";
import { posts } from "../atoms/posts";
import { users } from "../atoms/users";
import Comment from "./Comment";
import Like from "./Like";
import RemovePost from "./RemovePost";


const PostMap = () => {


  const postList = useRecoilValue(posts);
  const userList = useRecoilValue(users);
  
  const displayPosts = (postList) => {
    return postList.map((post) => (
      <li key={post.id} className="post">        
          <h5 className="userName left">{userList[post.creatorId].name} a posté :</h5>
          <RemovePost id={post.id} />        
        <hr style={{clear: 'both'}} />
        <p className="postContent">{post.text}</p>
        
        <Like postId={post.id} />
        <Comment postId={post.id} />
      </li>
    ));
  };




  return (
    <div className='container'>
      <ul className='post-list'>{displayPosts(postList)}</ul>
    </div>
  );
};

export default PostMap;
