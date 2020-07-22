import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ShowAnObject extends Component {
    myObject = {
        '1-1': "#FFFFFF",
        '1-2': "#AC43DE",
        '1-3': "#222222",
        '2-1': "#222222",
        '2-2': "#FFAACD",
        '2-3': "#FFAACD",
        '3-1': "#FFAACD",
        '3-2': "#222222",
        '3-3': "#FFAACD",
        toggleStitched(loc) {
            console.log("in togglestitched for :", loc);
  
        }
    }

    render() {
        return(
            <>
                Show an Object
                {JSON.stringify(this.myObject)}
                {this.myObject['1-1']}
                <Button onClick={() => this.myObject.toggleStitched('3-2')}>J</Button>
            </>
        )
    }
}

export default ShowAnObject;