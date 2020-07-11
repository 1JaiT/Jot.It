import React from 'react';
import logo from './logo.png';



class Register extends React.Component {
    
    


render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
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
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email"/>  
        </div>
            <div className="form-group">
             <label htmlFor="password">Password</label>
             <input type="text" name="password" placeholder="email"/>  
            </div>
        </div>
        </div>
        </div>     
    ); 
    }
}
    
export default Register



