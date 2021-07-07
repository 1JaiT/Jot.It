import React, { Component } from 'react';
import Toolbar from './components/Toolbar/toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import ToggleButton from './components/SideDrawer/ToggleButton';
import TodoList from './Todolist/TodoList';
import AddTodo from './AddTodo/addTodo';
import Backdrop from './components/Backdrop/Backdrop';
import  'styled-components';




class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
        sideDrawerOpen: false
    };
  }
  

    
  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log('No todos');
    }
  }


addTodo =  async (todo) => {
  await this.setState({todos: [...this.state.todos, {
  text: todo,
  completed: false
}] });
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
  console.log(localStorage.getItem('todos'));
}

updateTodo = async (todo) => {
 const newTodos = this.state.todos.map(_todo => {
    if(todo === _todo)
    return {
      text: todo.text,
      completed: !todo.completed
    }
    else
      return _todo
  });
  await this.setState({ todos: newTodos });
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
}
  toggleButtonClickHandler =() => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler =() => {
    this.setState({sideDrawerOpen: false});
  };

  

  render() {
    
    let backdrop;
    

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return(
     <React.Fragment>
    <div style={{height: '100%'}}>
     <Toolbar drawerClickHandler={this.toggleButtonClickHandler} />
     <SideDrawer show={this.state.sideDrawerOpen} />
     {backdrop}
     

     <ToggleButton /> 
     
     <main style={{marginTop: '64px'}}>Jot.It ..Just for Writers
      <p>Say aloud: I am confident in my abilities to complete this 
        project because I have all the tools I need within.</p>
      <p>Take a moment to make a list of actions you can 
         take to stay on track.</p> </main>

     <AddTodo addTodoFn={this.addTodo}></AddTodo>
     <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
    </div>

    
            
                </React.Fragment>
        );
      }
    }
    
    // const RightSide = props => {
    //   return (
    //     <div
    //       className="right-side"
    //       ref={props.containerRef}
    //       onClick={props.onClick}
    //     >
    //       <div className="inner-container">
    //         <button className="text">{props.current}</button>
    //       </div>
    //     </div>
    //   );
    // };
    


  
export default App;