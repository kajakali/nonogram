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
            //current pattern is the one that is displayed on the page as a grid of squares. Eventually it will come from the server.
            currentPattern: [[pink, orange, green, green], [pink, green, orange, orange], [orange, pink, pink, green], [green, orange, pink, pink]],
            //color options are displayed on the page as a row of colored squares. Eventually they will be either chosen from the master pattern in play mode or added to by a color picker in create mode
            colorOptions: [pink, orange, green, purple]
        });
        //when the page loads, go get the selected pattern. Eventually I will use a match param (once I have lots of patterns in the database.
        //in the near term, I'll probably use a select to choose which pattern to fetch)
        this.props.dispatch({type: 'FETCH_PATTERN', payload:{id: 3}});
    }
    componentDidUpdate(prevProps, prevState) {
        //if a new master pattern has arrived from the server, set the master pattern
        if(this.props.store.pattern.masterPattern !== prevProps.store.pattern.masterPattern){
            this.setState({
                masterPattern: this.props.store.pattern.masterPattern,
            })
        }

    }
    createPattern = () => {
        //when the button is clicked, send the current pattern to the server
        console.log('create a pattern!');
        this.props.dispatch({type: 'SEND_PATTERN', payload: {pattern: this.state.currentPattern}})
 
    }
    changeSquare = (outerIndex, innerIndex) => {
        //sqitch the color of a square in the current pattern show on the page by clicking it
        let newArray = this.state.currentPattern;
        let newElement = this.state.currentPattern[outerIndex];
        //find the square in the array that has been clicked on and change its color to the selected color
        newElement.splice(innerIndex, 1, this.state.selectedColor);
        newArray.splice(outerIndex, 1, newElement);
        this.setState({
            currentPattern: newArray
        });
    
    }
    changeColor = (color, colorIndex) => {
        //change the selected color by clicking on one of the color options
        console.log('the color info:', color, colorIndex);
        this.setState({
            selectedColor: color
        });
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
                <Box>
                <p>selected color: </p>
                <Square key="selected" backgroundColor={this.state.selectedColor} />
                </Box>

                    {/**this is where the array is displayed as clickable squares */}
                <Box>
                <p>make a pattern here:</p>
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