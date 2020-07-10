import React from 'react';
import Button from '@material-ui/core/Button';

function ChooseArraySize(props) {
    return(
        <p>
            Here we will choose the size of our pattern
            {JSON.stringify(props.patternArray)}
            <Button onClick={props.changeArraySize}>5 x 5</Button>
        </p>
    )
}

export default ChooseArraySize;