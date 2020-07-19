import React from 'react';


class AddTodo extends React.Component {

    constructor() {
        super();
            this.state = {
                todo: ''
            };
    }

    render() {
        return(<div className='addTodoContainer'>
            <form onSubmit={(e) => this.submitTodo(e)}>
                <h2>Favorite Quotes</h2>
                <input id='addTodoInput'
                 onChange={(e) => this.componentDidupdateInput(e)} type='text'>
                </input><h3>Descriptin here:</h3> <input type='text'></input>
                <button type='submit'>Jot</button>
                <h2>Outline for Book</h2>
                <input id='addTodoInput' onChange={(e) => this.componentDidupdateInput(e)} type='text'>
                </input><h3>Descriptin here:</h3> <input type='text'></input>
                <button type='submit'>Jot</button>
                <h2>Who is the reader?</h2>
                <input id='addTodoInput' onChange={(e) => this.componentDidupdateInput(e)} type='text'>
                </input><h3>Descriptin here:</h3> <input type='text'></input>
                <button type='submit'>Jot</button>

            </form>
        </div>
        
        );
    }
    


componentDidupdateInput = (e) => {
    this.setState({ todo: e.target.value });
}
submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
    document.getElementById('addTodoInput').value = '';
    }
}


export default AddTodo;
