import React from 'react';
class AddUserInfor extends React.Component{
    state = {
        Name: "",
        Age: ""
    }
    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        //console.log(this.state)
        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        })
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                <input type="text" 
                    value={this.state.Name}
                    onChange={(event) => this.setState({Name: event.target.value})} />
                    <input type="text"
                    value={this.state.Age}
                    onChange={(event) => this.setState({Age: event.target.value})}
                    
          />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfor;