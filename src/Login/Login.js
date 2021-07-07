import React from 'react';
import logo from './logo.png';
import './Login.css';
import styled from 'styled-components';

const StyledButton = styled.button`
position: center;
background: palevioletred;
color: #FFF;
border-radius: 3px;
border: 2px solid palevioletred;
padding: 3px 10px;
outline: none;
cursor: pointer
`
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          errorMessage: "",
          email: "test@kenzie.academy",
          password: "test123",
          
        };
      }         
    
    handleLogin = () => {
        if (this.state.email === "test@kenzie.academy" && this.state.password === "test123") {
          // Successfully logged in.
          console.log(this.props)
          this.props.history.push("/dashboard"); // Or wherever you want to redirect.
        } else {
              this.setState({errorMessage: "Invalid Username/Password"});
              // Maybe even clear the form inputs :) 
        }
      }

render() {
    return (
        
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Hey There Smarty</div>
        <div className="content">
            <div className="image">
        <img className="cal" src={logo} alt="logo" />
        </div>
        <div className="form">
            <div className="form-group">
             <label htmlFor="username">Username</label>
             <input type="text" name="username" placeholder="username"/>  
            </div>
            <div className="form-group">
             <label htmlFor="password">Password</label>
             <input type="text" name="password" placeholder="password"/>  
            </div>
            <StyledButton onClick={this.handleLogin} type="button">Login</StyledButton>

        </div>
        </div>
       
        </div>     
    ); 
    }
}
    

export default Login;


