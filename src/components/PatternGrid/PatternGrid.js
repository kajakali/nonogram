import React from 'react';
import Square from '../../components/Square/Square';

const PatternGrid =(props) => {
    const pink = '#F7BCAF';
    const orange = '#F7DEAF'; 
    const green = '#CCF7AF';
    const array = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 1, 1, 1], [1, 1, 1, 1]];
        return(
            <>
                <h1>I'm a grid!</h1>
                <Square  backgroundColor={pink} />
                <Square  backgroundColor={orange} />
                <Square  backgroundColor={green} />

            </>
        );

};

export default PatternGrid;