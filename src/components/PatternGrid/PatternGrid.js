import React, { Component } from 'react';
import Square from '../../components/Square/Square';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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
    createPattern = () => {
        console.log('create a pattern!');
        //TODO need to make an array and send it to the server. for now, it should just be a standard array
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

                {/**this is where the possible colors are turned into clickable squares */}
                <Box>
                {this.state.colorOptions.map((color, colorIndex) => (
                    <Square key={colorIndex} backgroundColor={color} onClick ={() => this.changeColor(color, colorIndex)}/>
                ))}
                </Box>

                    {/**this is where the array is displayed as clickable squares */}
                <Box>
                {this.state.currentPattern.map((element, outerIndex) => (
                    <Box key={outerIndex}>
                        {element.map((square, innerIndex) => (
                            <Square key={innerIndex} backgroundColor={square} onClick={() => this.changeSquare(outerIndex, innerIndex)}/>
                        ))}
                    </Box>
                    
                ))}
                </Box>

                {/**here's where I'll have a button to make a new array */}
                <Button onClick={this.createPattern}
                    variant='contained'
                    color='primary'
                    size='small'    
                >
                    New array
                </Button>

            </>
        );
    }
    

};
const mapStateToProps = (store) => ({
    store
  });

export default connect(mapStateToProps)(PatternGrid);