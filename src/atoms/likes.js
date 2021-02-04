import { atom } from 'recoil'

export const likes = atom ({    
    key: 'likes-list',
    default: [
        {postId: 1, likersId: [1, 3, 9]},
        {postId: 2, likersId: [1, 2]},
        {postId: 4, likersId: [0, 7, 1, 3, 9]},
    ]
})