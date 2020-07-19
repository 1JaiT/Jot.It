import React from 'react';
import 'styled-components';

const converted = {
  ".label": { fontSize: "20px" },
  input: {
    marginTop: "6px",
    minWidth: "18em",
    height: "37px",
    padding: "0px 10px",
    fontSize: "16px",
    fontFamily: "'Spartan', sans-serif",
    backgroundColor: ["e591d3", "rgb(229, 145, 211)"],
    border: "0",
    borderRadius: "4px",
    marginBottom: "31px",
    transition: "all 250ms ease-in-out",
    boxShadow: "0px 0px 14px 0.3px rgba(250, 181, 221, 0.588)"
  },
  ".button": { alignItems: "center" }
};

 

const RightSide = props => {
    return (
        <div className="right-side"
        ref={props.containerRef}
        onClick={props.onClick}
      >      <div style={converted}></div>

        <div className="inner-container">
          <button className="text">{props.current}</button>
        </div>
      </div>
    );
  };

  export default RightSide;