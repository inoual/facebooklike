import React from "react";
import { useRecoilValue } from "recoil";
import { comments } from "../atoms/comments";
import { users } from "../atoms/users";
// import RemovePost from "./RemovePost";


const CommentMap = ({postId}) => {
  const userList = useRecoilValue(users);
  const commentList = useRecoilValue(comments)

  const displayComments = (commentList) => {
    return commentList.filter(comment => comment.postId === postId).map((comment) => (
      <li key={comment.id} className="comment">        
          <div className="commentUserName left">{userList[comment.creatorId].name} a commenté :</div>
          {/* <RemovePost id={post.id} />         */}
        <hr style={{clear: 'both'}} />
        <div className="commentContent">{comment.text}</div>
      </li>
    ));
  };

  return (
    <div className='container'>
      <ul className='comment-list'>{displayComments(commentList)}</ul>
    </div>
  );
};

export default CommentMap;
