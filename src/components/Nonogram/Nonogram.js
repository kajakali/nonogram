import React, { Component } from 'react';
import Square from '../Square/Square';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PatternTable from '../../PatternTable/PatternTable';
import DisplayPattern from '../DisplayPattern/DisplayPattern';
import ChooseArraySize from '../ChooseArraySize/ChooseArraySize';
import SubmitPatternButton from '../SubmitPatternButton/SubmitPatternButton';
import ShowAnObject from '../ShowAnObject/ShowAnObject';
import BoxFrame from '../BoxFrame/BoxFrame';

const pink = '#F7BCAF';
const orange = '#F7DEAF'; 
const green = '#CCF7AF';
const purple = '#CAAFF7';

class Nonogram extends Component {

    state = ({
        //this is the pattern that's being shown in color in the browser
        patternBeingEdited: [],
        //this is the color currently being used to edit the pattern
        selectedColor: purple,
        colorOptions: [], //this should eventually be removed? and perhaps the color options should really be selected from either all the colors in the array, or from the colors chosen by a color picker?
        //this is the pattern that we are supposed to be matching to, the one that is currently shown as an array
        masterPattern: [],
        patternId: 0
    });

    componentDidMount() {
        this.setState({
            //current pattern is the one that is displayed on the page as a grid of squares. Eventually it will come from the server.
            patternBeingEdited: [[pink, orange, green, green], [pink, green, orange, orange], [orange, pink, pink, green], [green, orange, pink, pink]],
            //color options are displayed on the page as a row of colored squares. Eventually they will be either chosen from the master pattern in play mode or added to by a color picker in create mode
            colorOptions: [pink, orange, green, purple]
        });
  
    }
    componentDidUpdate(prevProps, prevState) {
        //if a new master pattern has arrived from the server, set the master pattern
        if(this.props.store.pattern.masterPattern !== prevProps.store.pattern.masterPattern){
            this.setState({
                masterPattern: this.props.store.pattern.masterPattern,
            });
        }
        
        if(this.state.patternId !== prevState.patternId){
            this.props.dispatch({type: 'FETCH_PATTERN', payload:{id: this.state.patternId}});
        }

    }

    changeSquareColor = (outerIndex, innerIndex) => {
        //sqitch the color of a square in the current pattern show on the page by clicking it
        let newArray = this.state.patternBeingEdited;
        let newElement = this.state.patternBeingEdited[outerIndex];
        //find the square in the array that has been clicked on and change its color to the selected color
        newElement.splice(innerIndex, 1, this.state.selectedColor);
        newArray.splice(outerIndex, 1, newElement);
        this.setState({
            patternBeingEdited: newArray
        });
    
    }

    submitPattern = (name) => {
        console.log("creating a pattern named:", name);
        this.props.dispatch({type: 'SEND_PATTERN', payload: {pattern: this.state.patternBeingEdited, name: name}})
    }

    changeArraySize = (array, resize) => {
        console.log('the array right now is', array, 'inner dimension', array[0] && array[0].length, 'outer dimension', array && array.length);
        switch(resize) {
            case "wider":
                {
                    console.log("wider");
                    let newArray = array;
                    for(let i = 0; i<array.length; i++){
                        newArray[i].push("#DDDDDD");
                    }
                    this.setState({array:newArray});
                }
                break;
            case "narrower":
                {
                    console.log("narrower");
                    if(array[0].length >1){
                        let newArray = array;
                    for(let i = 0; i<array.length; i++){
                        newArray[i].pop();
                    }
                    this.setState({array:newArray});
                    }
                    
                }

                break;
            case "taller":
                {
                    console.log("taller");
                    let newArray = array;
                    let newRow = [];
                    for(let i=0; i<array[0].length; i++){
                        newRow.push("#DDDDDD");
                    }
                    newArray.push(newRow);
                    this.setState({array:newArray});
                }
                break;
            case "shorter":
                {
                    console.log("shorter");
                    if(array.length >1){
                        let newArray = array;
                        newArray.pop();
                        this.setState({array:newArray});
                    }

                }
                break;
            default:
                console.log("none");
        }
    }
    changeColor = (color, colorIndex) => {
        //change the selected color by clicking on one of the color options
        console.log('the color info:', color, colorIndex);
        this.setState({
            selectedColor: color
        });
    }    

    selectPattern = (id) => {
        this.setState({ patternId: id});
    }

    render(){


    const { classes } = this.props;

        return(
            <>
                <h1>I'm a nonogram!</h1>

                <h2>here's the pattern you've selected from the table of patterns (this one is not editable!)</h2>

                {/**this is the master pattern that we just got back from the server - we can't edit this one */}
                <Box>
                <p>this is what the selected pattern looks like:</p>
                <DisplayPattern patternToShow={this.state.masterPattern} />
    
                </Box>



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

                    {/**this is where the array (that you're currently editing!!!) is displayed as clickable squares */}
                <Box>
                <p>make a pattern here:</p>
                <ChooseArraySize patternArray={this.state.patternBeingEdited} changeArraySize={(resize) => this.changeArraySize(this.state.patternBeingEdited, resize)}/>
                <h3>here's the display pattern component displaying the pattern being edited</h3>
                <DisplayPattern patternToShow={this.state.patternBeingEdited} changeSquareColor={this.changeSquareColor}/>
                </Box>

                {/**here's where I'll have a button to make a new array */}
       
        
               <SubmitPatternButton submitName={this.submitPattern}/>

                <PatternTable select={(id) => this.selectPattern(id)}/>
                <ShowAnObject />
                <BoxFrame />
            </>
        );
    }
    

};
const mapStateToProps = (store) => ({
    store
  });

export default connect(mapStateToProps)(Nonogram);