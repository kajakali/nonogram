import React from 'react';
import Button from '@material-ui/core/Button';

function ChooseArraySize(props) {
    return(
        <p>
            Here we will choose the size of our pattern
            {JSON.stringify(props.patternArray)}
            <Button onClick={() => props.changeArraySize('wider')}>wider</Button>
            <Button onClick={() => props.changeArraySize('narrower')}>narrower</Button>
            <Button onClick={() => props.changeArraySize('taller')}>taller</Button>
            <Button onClick={() => props.changeArraySize('shorter')}>shorter</Button>
        </p>
    )
}

export default ChooseArraySize;