import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
padding: 0
`
const Todo = () => (
    <ul className="todo">
    <StyledUl>
        <Todos id="todo-1" title="" />
        <Todos id="todo-2" title="" />
        <Todos id="todo-3" title="" />
    </StyledUl>
    </ul>
)


class TodoItem extends Component {

    render() {
        return (
            <React.Fragment >
                <td style={{ width: 10 }} className="text-center">
                    {this.props.index}
                </td>
                <td style={{ width: 15 }} className="text-center">
                    <input type="checkbox" defaultChecked={this.props.todo.isDone}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
                </td>
                <td>
                    {
                        this.renderTodo()
                    }
                </td>
                <td style={{ width: 100 }} className="text-center">
                    <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
            </React.Fragment>
        );
    }

    renderTodo(){
        if(this.props.todo.isDone)
        return <s>{this.props.todo.value}</s>;
        else
        return this.props.todo.value;
    }

}

// export default Todo;




// class TodoItem extends React.Component {

//     render() {
       
//         const { todo } = this.props;

//         return(
//             <div className={todo.completed ? ' completed' : '' }>
//                 <div className={'todoItem'}>
//             <input type="checkbox" checked={todo.completed} onClick={this.toggleTodo}/>
//           <label>{todo.text}</label> 
//           </div>
//           </div>

//         );
//     }
//    toggleTodo = () => {
//     this.props.updateTodoFn(this.props.todo);
//    } 
// }

export default TodoItem;
