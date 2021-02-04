import React from 'react'
import { useRecoilState } from 'recoil'
import { users } from '../atoms/users'

const UserMap = () => {

    const [userList, setUserList] = useRecoilState(users)


    const select = (id) => {
    let updatedList = userList.map((person) =>
        person.id === id
        ? {
            ...person,
            selected: true
            }   
        : {
            ...person,
            selected: false
            }
    );
    setUserList(updatedList);
    };

    return (
        <div>
            {userList.map(user => <button key={user.id} type='button' class='btn btn-outline-dark' onClick={() => select(user.id)}>{user.name}</button>)}
        </div>
    )
}

export default UserMap