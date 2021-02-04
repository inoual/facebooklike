import React from 'react'
import AddPost from './AddPost'
import PostMap from './PostMap'
import Who from './Who'

const Wall = () => {

    return (
        <div className='wall'>
            <Who />
            <AddPost />
            <PostMap />            
        </div>
    )
}

export default Wall
