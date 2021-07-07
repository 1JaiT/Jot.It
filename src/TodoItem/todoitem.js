import React from 'react';
import './style.css';




class TodoItem extends React.Component {

    render() {
       
        const { todo } = this.props;

        return(
            <div className={todo.completed ? ' completed' : '' }>
                <div className={'todoItem'}>
            <input type="checkbox" checked={todo.completed} onClick={this.toggleTodo}/>
          <label>{todo.text}</label> 
          </div>
          </div>

        );
    }
   toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
   } 
}

export default TodoItem;
