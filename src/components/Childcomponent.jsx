import React from 'react';
class Childcomponent extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            valueInput: 'abc'//giá trị mặc định
        }
    }
    handleInput = (event) => {
        //console.log(event.target.value);
        this.setState({//hiển thị đúng giá trị được nhập vào
            valueInput: event.target.value
        })
    }
    handleOnchangeInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        console.log(this.state)
    }


    

    render() {
        return (
            <>
                <div>
            	<span>{this.state.valueInput}</span>
         	</div>

                <form action="" 
onSubmit={(event) => this.handleOnSubmit(event)}>
         <input type="text" 
             value={this.state.Name}//gán giá trị mặc định
  onChange={(event) =>this.handleOnchangeInput(event)} />
    <button>Submit</button>
</form>




            </>
        );
    };

}
export default Childcomponent;
