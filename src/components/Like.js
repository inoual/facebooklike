import React from "react";
import { useRecoilValue } from "recoil";
import { likes } from "../atoms/likes";
import { users } from "../atoms/users";


const Like = ({postId}) => {

  const likesList = useRecoilValue(likes)
  const userList = useRecoilValue(users)

  const likesIdList = likesList[postId].likersId
  

  const showLikers = () => likesIdList.map(id => {
    const user = userList.find(user => user.id === id)  
  
    return <li key={user.id}>{user.name}</li>
  })


  return (
    <div>
      <button onClick={showLikers}>Vous avez { likesIdList.length } likes</button>
    </div>
  );
};

export default Like;