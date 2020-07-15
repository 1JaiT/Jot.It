import React from 'react';

import styled from 'styled-components'



// class TodoList extends React.Component{
//     state = {
//       user: [
//         { 
//          name: "Sage",
//          avatarImage: require("/Users/jessicathurman/Jot.It/src/components/SideDrawer/mssage.png"),
//         }
//      ],
//         TodoList: [
//           {
//             id: 1, 
//               title: "item 1",
//               description: "Start Project",
//               completed: false
//             },
//             {
//               id: 2,
//               title: "item 2",
//               description: "Writting Topics",
//               completed: false
//             },
//             {
//               id: 3,
//               title: "item 3",
//               description: "Quotes to Use",
//               completed: false
//             },
//             {
//               id: 4,
//               title: "item 4",
//               description: "Complete Outline",
//               completed: false
//             },   
           
//         ],
//        newTask: "",  
      
//       };
    
//       componentDidMount() {
//         this.handleAddNewTask();
//         const todoString = localStorage.getItem(TodoList)
//         if (todoString){
//           this.setState({toDoList: JSON.parse(todoString) })
//         }
//       }

//       componentDidUpdate(prevProps, prevState) {
//         if(prevState.toDoList !== this.state.toDoList){
//         localStorage.setItem(TodoList, JSON.stringify(this.state.toDoList) )
//       }
//     }
      
    
//       handleInputChange = (event) => {
//         this.setState({newTask: event.target.value});
//       };
//       handleAddNewTask = () => {
//         let newTaskObj = {
//           description: this.state.newTask
//         }
//         this.setState({
//           TodoList: [...this.state.toDoList, newTaskObj],
//           newTask: ""
//         });
//       };
//       handleDelete = id => {
//         const filterId = this.state.toDoList.filter((toDoList) => toDoList.id !== id);
//         this.setState({toDoList:filterId});
//       }
//     }
      
const TodoDetail = () => (
    <form>
        <FormInput placeholder="Jot This" />
    </form>
)

const FormInput = styled.input`
    width: 235px;
    outline: none;
    font-size: 13px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
`

export default TodoDetail