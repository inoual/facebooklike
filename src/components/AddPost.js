import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { posts } from "../atoms/posts";
import { users, anyOneSelected } from "../atoms/users";

const AddPost = () => {
  const [postList, newPostList] = useRecoilState(posts);
  const userList = useRecoilValue(users);
  const userSelected = useRecoilValue(anyOneSelected);

  const [newPost, setNewPost] = useState("");
  const [id, setId] = useState(10);

  const handlePost = (e) => {
    return setNewPost((prevState) => (prevState = e.target.value));
  };

  const submitPost = (e) => {
    e.preventDefault();

    const userId = userList.filter((user) => user.selected === true)[0].id;
    const thisPost = { id: id, creatorId: userId, text: newPost };

    if (newPost.length < 1) {
      window.alert("Ecrire un commentaire avant de le soumettre");
    } else {
      newPostList([...postList, thisPost]);
      setId((prevState) => prevState + 1);
      setNewPost("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitPost} className="form">
        <textarea
          type="text"
          className="area"
          placeholder="Poster quelque chose"
          value={newPost}
          onChange={handlePost}
          disabled={!!userSelected}
        />

        <button
          type="submit"
          class="btn btn-outline-dark"
          value="Poster"
          disabled={userSelected}
        >
          Poster
        </button>
      </form>
    </div>
  );
};

export default AddPost;
