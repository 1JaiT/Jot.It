import React, { Component } from 'react';
import Toolbar from './components/Toolbar/toolbar'
import ToggleButton from './components/SideDrawer/ToggleButton';
import TodoList from './Todolist/todolist';
import AddTodo from './AddTodo/addTodo';
import avatar from './components/SideDrawer/sage.png';


class App extends Component {


  render() {
    return(
    <div className="Jot.It">Jot.It
     <Toolbar />
     <ToggleButton />
     <img src={avatar} alt="sage"></img>
     <main style={{marginTop: '64px'}}>Jot.It ..Just for Writers
      <p>Say aloud: I am confident in my abilities to complete this 
        project because I have all the tools I need within.</p>
      <p>Take a moment to make a list of actions you can 
         take to stay on track.</p> </main>

     <AddTodo addTodoFn={this.addTodo}></AddTodo>
     <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
    </div>)
  }
  
  constructor() {
    super();
    this.state = {
      todos: []
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
}
export default App;
