import React, { Component } from 'react';
import Square from '../../components/Square/Square';

class PatternGrid extends Component {
    render(){
        return(
            <>
                <h1>I'm a grid!</h1>
                <Square  />

            </>
        );
    };
};

export default PatternGrid;