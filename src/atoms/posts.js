import { atom } from 'recoil'

export const posts = atom ({    
    key: 'postList',
    default: [
        {id: 0, creatorId: 1, text: 'Je suis trop content de vous avoir vus ! Ca fait tellement longtemps, ça m a vraiment fait plaisir. Hâte de tous vous revoir encore'},
        {id: 1, creatorId: 3, text: 'J ai envie de voyager. Cette histoire de Covid commence à sérieusement me peser. Vivement qu on trouve le vaccin, qu on en finisse'},
        {id: 2, creatorId: 7, text: 'Qui peut m aider à déménager ce week end ?'}
    ]
})