import React, { Component } from 'react';

class Square extends Component {
    render() {
        return(
            <div style={{
                backgroundColor: 'almond',
                height:'5px', 
                width: '5px' }}    
            />
            //{this.props.backgroundColor}
                
        );
    };
};

export default Square;
