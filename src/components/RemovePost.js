import React from "react";
import { useRecoilState } from "recoil";
import { posts } from "../atoms/posts";

const RemovePost = ({ id }) => {
  const [list, setList] = useRecoilState(posts);

  const menu = () => {
    const newList = list.filter((person) => person.id !== id);
    setList(newList);
  };

  return (
    <div className="right framed" onClick={menu}>
      x
    </div>
  );
};

export default RemovePost;