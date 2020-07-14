import React, { Component } from 'react';

// class AddTodoButton extends Component {
//     state = {
//         defaultValue: "",
//         value: this.props.addTodoValue
//     }

//     handleChange = (e) => {
//         //Updating local component state
//         this.setState({
//             value: e.target.value
//         });
//     }

//     clearInput = () => {
//         //Clear existing value in input
//         document.getElementById("todoValue").value = "";
        
//         //Updating local component state
//         this.setState({value:""});
//     }

//     addTodo = () => {
//         //Call method reference in Todos component using props
//         this.props.fooAddTodo(this.state.value);
//         this.clearInput();
//     }

//     render() {
//         return (
//             <div className="input-group mb-3">
//                 <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
//                 <div className="input-group-append">
//                     <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default AddTodoButton;

class AddTodoButton extends Component {

    constructor() {
        super();
            this.state = {
                todo: ''
            };
    }

    render() {
        return(<div className='addTodoContainer'>
            <form onSubmit={(e) => this.submitTodo(e)}>
                <input id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'>
                </input>
                <button type='submit'>Jot</button>
            </form>
        </div>
        
        );
    }
    


updateInput = (e) => {
    this.setState({ todo: e.target.value });
}
submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    document.getElementById('addTodoInput').value = '';
    }
}


export default AddTodoButton;
