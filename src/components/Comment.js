import React from "react";
import CommentMap from "./CommentMap";

const Comment = ({postId}) => {
  return (
    <div>
      <CommentMap postId={postId} />
      <textarea className='comment-area' type="text" placeholder="Votre commentaire"></textarea>
    </div>
  );
};

export default Comment;
