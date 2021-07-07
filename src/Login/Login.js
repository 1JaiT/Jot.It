import React from 'react';
import logo from './logo.png';
import './Login.css';



class Login extends React.Component {
    
    


render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
        </div>
        </div>
       
        </div>     
    ); 
    }
}
    

export default Login;


