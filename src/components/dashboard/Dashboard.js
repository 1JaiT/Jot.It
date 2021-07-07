import React, { Component } from 'react';
import Clock from '../clock/Clock';
import Login from '../../Login/Login';
import Register from '../../Login/Register';
import RightSide from '../../Rightside/rightside';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
        sideDrawerOpen: false,
        
        history: []
      
    };
  }
    changeState() {
    const { isLogginActive } = this.state;
    if(isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
    } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive }));
}
render () {

  
  const { isLogginActive } = this.state;
  const current = isLogginActive ? "Register Here" : "Login Here";
  const currentActive = isLogginActive ? "Login Here" : "Register Here";
  return (
    <React.Fragment>
    <Clock />
    <div className="App">
            <div className="login">
              <div className="container" ref={ref => (this.container = ref)}>
                {isLogginActive && (
                  <Login containerRef={ref => (this.current = ref)} />
                  )}
                {!isLogginActive && (
                  <Register containerRef={ref => (this.current = ref)} />
                  )}
              </div>
              <RightSide
                current={current}
                currentActive={currentActive}
                containerRef={ref => (this.rightSide = ref)}
                onClick={this.changeState.bind(this)}
                />
            </div>
          </div>
          </React.Fragment>
  );
 
};
  }

  export default Dashboard;
