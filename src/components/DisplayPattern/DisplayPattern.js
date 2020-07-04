import React from 'react';
import Box from '@material-ui/core/Box';
import Square from '../Square/Square';



function DisplayPattern(props) {
  return (
    <div>

      <p>Eventually I will be a component to show a pattern based on an array and a functino passed in from my parent
      </p>



    {props.patternToShow && props.patternToShow.map((element, outerIndex) => (
                    <Box key={outerIndex}>
                        {element.map((square, innerIndex) => (
                            <Square key={innerIndex} backgroundColor={square} onClick={() => props.changeSquare(outerIndex, innerIndex)}/>
                        ))}
                    </Box>
                    
                ))}
    </div>
  );
}

export default DisplayPattern;
