import React, { useEffect, useState } from 'react'
import AddUserInfor from '../components/AddUserInfor'
import DisplayInfor from '../components/DisplayInfor'

export default function Mycomponent() {
    const data = [
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 17 },
        { id: 3, Name: "Chien", Age: 32 },
    ]
    
    const [listUser, setListUser] = useState(data)

   


    const handleAddnewUser = (userObject) => {
        setListUser([userObject, ...listUser])
    }

    const handleDeleteUser = (userID) => {
        let listUserClone = listUser
        listUserClone = listUserClone.filter(item => item.id !== userID)
        setListUser(listUserClone)
    }

    const handleDeleteAll = () => {
        setListUser([])
    }
    return (
        <div>
            {listUser.length >= 10 ? <h1>Khong duoc qua 10</h1> : null}
            {listUser.length == 0 ? <h1>Khong co du lieu</h1> : null}
            <AddUserInfor handleAddnewUser={handleAddnewUser} handleDeleteAll={handleDeleteAll}/>
            <br/>
            <DisplayInfor listUser={listUser} handleDeleteUser = {handleDeleteUser}/>
        </div>
    )
}
