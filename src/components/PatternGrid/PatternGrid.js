import React, { Component } from 'react';
import Square from '../../components/Square/Square';

const PatternGrid =(props) => {

        return(
            <>
                <h1>I'm a grid!</h1>
                <Square  backgroundColor='green' />

            </>
        );

};

export default PatternGrid;