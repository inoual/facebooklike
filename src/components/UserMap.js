import React from 'react'
import { useRecoilState } from 'recoil'
import { users } from '../atoms/users'

const UserMap = () => {

    const [userList, setUserList] = useRecoilState(users)


    const select = (id) => {
    var updatedList = userList.map((person) =>
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
            <ul style={{display: 'flex'}} className='horizontal-list'>
                {userList.map(user => <button key={user.id} className={`user ${user.selected ? "selected" : ""}`} onClick={() => select(user.id)}>{user.name}</button>)}
            </ul>
        </div>
    )
}

export default UserMap