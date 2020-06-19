import React, { Component } from 'react';
import Square from '../../components/Square/Square';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';

const pink = '#F7BCAF';
const orange = '#F7DEAF'; 
const green = '#CCF7AF';
const purple = '#CAAFF7';

class PatternGrid extends Component {

    state = ({
        currentPattern: [],
        selectedColor: purple,
        colorOptions: [],
        databasePattern: [],
        masterPattern: []
    });

    componentDidMount() {
        this.setState({
            currentPattern: [[pink, orange, green, green], [pink, green, orange, orange], [orange, pink, pink, green], [green, orange, pink, pink]],
            colorOptions: [pink, orange, green]
        });
        this.props.dispatch({type: 'FETCH_PATTERN', payload:{id: 1}});
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.store.pattern.masterPattern !== prevProps.store.pattern.masterPattern){
            console.log('hi!');
            this.setState({
                masterPattern: this.props.store.pattern.masterPattern,
            })
        }

    }

    changeSquare = (outerIndex, innerIndex) => {
        let newArray = this.state.currentPattern;
        let newElement = this.state.currentPattern[outerIndex];
        newElement.splice(innerIndex, 1, this.state.selectedColor);
        newArray.splice(outerIndex, 1, newElement);
        this.setState({
            currentPattern: newArray
        });
    
    }
    changeColor = (color, colorIndex) => {
        console.log('the color info:', color, colorIndex);
        this.setState({
            selectedColor: color
        });
        console.log('state', this.state);
    }    


    render(){


    const { classes } = this.props;

        return(
            <>
                <h1>I'm a grid!</h1>
                <h2>here's the pattern we've picked</h2>
                {JSON.stringify(this.state.masterPattern)};
                <h2>Color Choices!!!</h2>
                <Box>
                {this.state.colorOptions.map((color, colorIndex) => (
                    <Square key={colorIndex} backgroundColor={color} onClick ={() => this.changeColor(color, colorIndex)}/>
                ))}
                </Box>


                <Box>
                {this.state.currentPattern.map((element, outerIndex) => (
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
const mapStateToProps = (store) => ({
    store
  });

export default connect(mapStateToProps)(PatternGrid);