import { atom } from 'recoil'

export const comments = atom ({    
    key: 'comments-list',
    default: [
        {id: 0, creatorId: 1, postId: 1, text: 'Commentaire 1'},
        {id: 1, creatorId: 3, postId: 2, text: 'Commentaire 2'},
        {id: 2, creatorId: 0, postId: 0, text: 'Commentaire 3'},
        {id: 1, creatorId: 3, postId: 0, text: 'Commentaire 4'},
        {id: 2, creatorId: 7, postId: 1, text: 'Commentaire 5'}
    ]
})