import React from 'react';
import logo from './logo.png';
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



class Register extends React.Component {
    
    


render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register Here<p>Jot.It</p></div>
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
        <StyledButton type="button">Register</StyledButton>

        </div>
        </div>     
    ); 
    }
}
    
export default Register



