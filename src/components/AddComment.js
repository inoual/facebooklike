import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { posts } from "../atoms/posts";
import { users, anyOneSelected } from "../atoms/users";


const AddComment = () => {

    const [postList, newPostList] = useRecoilState(posts)
    const userList = useRecoilValue(users)
    const userSelected = useRecoilValue(anyOneSelected)


    const [newPost, setNewPost] = useState("");
    const [id, setId] = useState(10)

    
    const handlePost = e => setNewPost(prevState => prevState = e.target.value)

    const submitComment = (e) => {
        e.preventDefault();
        const userId = userList.filter(user => user.selected === true)[0].id

        const thisPost = {id: id, creatorId: userId, text: newPost}
        newPostList([...postList, thisPost])
        setId(prevState => prevState + 1)
        setNewPost('')
    };

    return (
    <div className='container'>
        <form onSubmit={submitComment} className='form'>
        <textarea
            type="text"
            className='area'
            placeholder="Poster quelque chose"
            value={newPost}
            onChange={handlePost}
            disabled={userSelected ? 'disabled' :''}            
        />
        <input type='submit' className='sub' value='Commenter' disabled={userSelected ? 'disabled' :''}/>
        </form>
    </div>
    );
};

export default AddComment;