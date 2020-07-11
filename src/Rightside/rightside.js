import React from 'react';

 

const RightSide = props => {
    return (
      <div
        className="right-side"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <button className="text">{props.current}</button>
        </div>
      </div>
    );
  };

  export default RightSide;