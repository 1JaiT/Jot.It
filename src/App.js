import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import ToggleButton from './components/SideDrawer/ToggleButton';
import TodoList from './TodoList/TodoList';
import AddTodoButton from './AddTodoButton/AddTodoButton';
import Backdrop from './components/Backdrop/Backdrop';
import styled from 'styled-components';

const Container = styled.div`
width: 250px;
margin:10px auto;
font-family: Spartan', sans-serif;
font-size 13px`

// const App = () => (
//   <Container>
//   <div>
//     <Todo />
//   </div>
//   </Container>
// )

// render(<App />, document.getElementById('app'))

// class App extends Component {

  // render() {
  //   return (
  //     <div className="container">
  //       <h1 className="text-center">ToDo App in ReactJS</h1>
  //       <Todos />
  //     </div>
  //   );
  // }



class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
        sideDrawerOpen: false
    };
  }
  

  
  backdropClickHandler =() => {
    this.setState({sideDrawerOpen: false});
  };

  

  render() {
    
    let backdrop;
    

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return(
      
     <Container>
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

     <AddTodoButton addTodoFn={this.addTodo}></AddTodoButton>
     <TodoList updateTodoFn={this.updateTodos} todos={this.state.todos}></TodoList>
    </div>

    
            
    </Container>
        );
      }
    }
    
  
    


  
export default App;