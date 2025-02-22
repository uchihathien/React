import React from 'react'

export default function DisplayInfor(props) {
    
    const { listUser } = props
    return (
        <div>
            {listUser.map((user) => {
                return (
                    <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                        <div>User name is: {user.Name}</div>
                        <div>User Age: {user.Age}</div>
                        <button onClick={() => {
                            this.props.handleDeleteUser(user.id)
                        }}>Delete</button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
