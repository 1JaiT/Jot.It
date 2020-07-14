import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledList = styled.li`
    list-style: none;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px
`
const StyledLabel = styled.label`
    float: cen;
    cursor: pointer
`
const StyledButton = styled.button`
    float: right;
    background: palevioletred;
    color: #FFF;
    border-radius: 3px;
    border: 2px solid palevioletred;
    padding: 3px 10px;
    outline: none;
    cursor: pointer
`
class TodoList extends React.Component {
    // constructor 
    render () {
            // const { id, title } = props
            
            return (
                <StyledList>
                    <StyledLabel htmlFor={this.props.id}>
                        <input type="checkbox" id={this.props.id} /> {this.props.title}
                    </StyledLabel>
                    <StyledButton type="button">Delete</StyledButton>
                </StyledList>
            )
        }
    }
        TodoList.propTypes = {
            title: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        }

//         const { id, title } = props
//         return (
//             <li>
//                 <label htmlFor={id}>
//                     <input typre="checkbox" id={id} /> {title}
//                 </label>
//                 <button type="button">Delete</button>
//             </li>
//         )
//     }
// }

// Todos.propTypes = {
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired
// }








// export default Todos

// 

//     render() {
//         return (
//             <table className="table">
//                 <tbody>
//                     {this.state.todos.map((todo, index) => (
//                         <tr key={todo.id}>
//                             <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
//                         </tr>
//                     ))}
//                     <tr>
//                         <td colSpan="4" className="text-center">
//                             <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         );
//     }
    // class TodoList extends Component {
    //   updateTodo = (todo) => {
    //       this.props.updateTodoFn(todo);
    //   }
    
    //     render() {
    //         const { todos } =this.props;
    
    //         return(<div className='todoListContainer'> {
    //             todos.map((_todo, _index) => {
    //                 return(
    //                     <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}></TodoItem>
    //                 )
    //             })
    //         }
    //     </div>
    //     );
    // }
// }

// export default Todos;


    
// }




export default TodoList;
