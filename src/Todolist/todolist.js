import React, { Component } from 'react';
import TodoItem from '../TodoItem/todoitem';


class TodoList extends Component {
  updateTodo = (todo) => {
      this.props.updateTodoFn(todo);
  }

    render() {
        const { todos } =this.props;

        return(<div className='todoListContainer'> {
            todos.map((_todo, _index) => {
                return(
                    <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}></TodoItem>
                )
            })
        }
    </div>
    );
}

    
}




export default TodoList;
