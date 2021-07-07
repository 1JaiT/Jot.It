import React from 'react';

import ToggleButton from '../SideDrawer/ToggleButton';

import './toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar_toggle-button">
        <ToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__avatar"><a href="/">Jot.It</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
      <ul>
        <li><a href="/">Today</a></li>
        <li><a href="/">This Week</a></li>
        <li><a href="/">This Month</a></li>
        <li><a href="/">Inspiration</a></li>
        <li><a href="/">Folder</a></li>
      </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;

    