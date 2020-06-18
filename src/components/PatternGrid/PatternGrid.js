import React, { Component } from 'react';
import Square from '../../components/Square/Square';
import Box from '@material-ui/core/Box';

const pink = '#F7BCAF';
const orange = '#F7DEAF'; 
const green = '#CCF7AF';
const purple = '#CAAFF7';

class PatternGrid extends Component {

    state = ({
        pattern: [],
        selectedColor: purple
    });

    componentDidMount() {
        this.setState({
            pattern: [[pink, orange, green, green], [pink, green, orange, orange], [orange, pink, pink, green], [green, orange, pink, pink]],
        });
    }
    changeSquare = (outerIndex, innerIndex) => {
        let newArray = this.state.pattern;
        let newElement = this.state.pattern[outerIndex];
        newElement.splice(innerIndex, 1, 'purple');
        newArray.splice(outerIndex, 1, newElement);
        this.setState({
            pattern: newArray
        });

        
 
    
    }

    render(){


    const { classes } = this.props;

        return(
            <>
                <h1>I'm a grid!</h1>
                <Square  backgroundColor={pink} />
                <Square  backgroundColor={orange} />
                <Square  backgroundColor={green} />
                <Box>
                {this.state.pattern.map((element, outerIndex) => (
                    <Box key={outerIndex}>
                        {element.map((square, innerIndex) => (
                            <Square key={innerIndex} backgroundColor={square} onClick={() => this.changeSquare(outerIndex, innerIndex)}/>
                        ))}
                    </Box>
                    
                ))}
                </Box>


            </>
        );
    }
    

};

export default PatternGrid;