import React from "react";
import Childcomponent from "./Childcomponent"
import DisplayInfor from "./DisplayInfor"
import AddUserInfor from "./AddUserInfor"
class Mycomponent extends React.Component {
    state = {
        listUser: [
            {id: 1, Name: "Dung", Age: 49},
            {id: 2, Name: "Hoang", Age: 17},
            {id: 3, Name: "Chien", Age: 32},
        ]
    }
    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;
// let listUserClone=[...this.state.listUser]//có thể viết theo cách này
listUserClone = listUserClone.filter(item => item.id !== userID)
         this.setState({
            listUser: listUserClone
        })
    }




    render() {
        return (
            <div>
               
               <AddUserInfor handleAddnewUser={this.handleAddnewUser}>
</AddUserInfor> 

                <hr />
                <DisplayInfor listUser={this.state.listUser}
              handleDeleteUser={this.handleDeleteUser}
                ></DisplayInfor>

            </div>
        );

    }

}
export default Mycomponent;

