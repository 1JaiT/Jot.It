import React from 'react';
import logo from './mssage.png'
import './SideDrawer.css';

const sideDrawer = props => {
        let drawerClasses = 'side-drawer';
        if(props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (

    <nav className={drawerClasses}>
        <img className="avatar" src={logo} alt="mssage" />
        <ul>
            <li><a href="/">Today</a></li>
            <li><a href="/">This Week</a></li>
            <li><a href="/">This Month</a></li>
            <li><a href="/">Inspiration</a></li>

        </ul>
    </nav>
    );
};

export default sideDrawer; 