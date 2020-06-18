import React from 'react';
import Square from '../../components/Square/Square';
import Box from '@material-ui/core/Box';

const PatternGrid =(props) => {
    const changeSquare = (outerIndex, innerIndex) =>{
        console.log('outer index:', outerIndex, 'inner index:', innerIndex);
    }
    const pink = '#F7BCAF';
    const orange = '#F7DEAF'; 
    const green = '#CCF7AF';
    const array = [[pink, orange, green, green], [pink, green, orange, orange], [orange, pink, pink, green], [green, orange, pink, pink]];
    //const otherArray = [[{id: },{},{},{}],[{},{},{},{}],[{},{},{},{}],[{},{},{},{}]];
        return(
            <>
                <h1>I'm a grid!</h1>
                <Square  backgroundColor={pink} />
                <Square  backgroundColor={orange} />
                <Square  backgroundColor={green} />
                <Box>
                {array.map((element, outerIndex) => (
                    <Box key={outerIndex}>
                        {element.map((square, innerIndex) => (
                            <Square key={innerIndex} backgroundColor={square} onClick={() => changeSquare(outerIndex, innerIndex)}/>
                        ))}
                    </Box>
                    
                ))}
                </Box>


            </>
        );

};

export default PatternGrid;