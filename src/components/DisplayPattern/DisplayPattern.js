import React from 'react';
import Box from '@material-ui/core/Box';
import Square from '../Square/Square';


//this component takes an array of colors and displays it
function DisplayPattern(props) {
  return (
    <div>
      {props.patternToShow && props.patternToShow.map((element, outerIndex) => (
        <Box key={outerIndex}>
            {element.map((square, innerIndex) => (
                <Square key={innerIndex} backgroundColor={square} onClick={() => props.changeSquareColor && props.changeSquareColor(outerIndex, innerIndex)}/>
            ))}
        </Box>           
      ))}
    </div>
  );
}

export default DisplayPattern;
