import React, { Component } from 'react';

const Square =(props) => {
    return(
        <>
            <div style={{
                backgroundColor: 'almond',
                height:'5px', 
                width: '5px' }}    
            />
            <p>I am {props.backgroundColor}</p>
        </>

            
    );
};

export default Square;
