import React from 'react';
import Square from '../../components/Square/Square';

const PatternGrid =(props) => {
    const pink = '#F7BCAF';
    const orange = '#F7DEAF'; 
    const green = '#CCF7AF';
    const array = [[pink, orange, green, green], [pink, green, orange, orange], [orange, pink, pink, green], [green, orange, pink, pink]];
        return(
            <>
                <h1>I'm a grid!</h1>
                <Square  backgroundColor={pink} />
                <Square  backgroundColor={orange} />
                <Square  backgroundColor={green} />
                {array.map(element => (
                    <h3>
                        {element.map(square => (
                            <Square backgroundColor={square} />
                        ))}
                    </h3>
                    
                ))}

            </>
        );

};

export default PatternGrid;