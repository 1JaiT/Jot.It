import React from 'react';
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

const RightSide = props => {
    return (
      <div
        className="right-side"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <StyledButton className="text">{props.current}</StyledButton>
        </div>
      </div>
    );
  };

  export default RightSide;