import { atom, selector } from 'recoil'

export const users = atom ({    
    key: 'userList',
    default: [
        {id: 0, name: 'Paul', selected: false},
        {id: 1, name: 'Max', selected: false},
        {id: 2, name: 'Diana', selected: false},
        {id: 3, name: 'Stéphane', selected: false},
        {id: 4, name: 'Aurélie', selected: false},
        {id: 5, name: 'Mélanie', selected: false},
        {id: 6, name: 'Michel', selected: false},
        {id: 7, name: 'Richard', selected: false},
        {id: 8, name: 'Betty', selected: false},
        {id: 9, name: 'Julien', selected: false}
    ]
})


export const anyOneSelected = selector ({
    key: "selected-user",
    get: ({ get }) => {
      const list = get(users);
      const number = list.filter(user => user.selected === true).length;
      return number !== 0 ? false : true
    }
  });