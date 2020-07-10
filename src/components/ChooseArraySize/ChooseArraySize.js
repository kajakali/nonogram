import React from 'react';
import Button from '@material-ui/core/Button';

function ChooseArraySize(props) {
    return(
        <p>
            Here we will choose the size of our pattern:
            <Button size="small" variant="contained" color="primary" onClick={() => props.changeArraySize('wider')}>wider</Button>
            <Button size="small" variant="contained" color="primary" onClick={() => props.changeArraySize('narrower')}>narrower</Button>
            <Button size="small" variant="contained" color="primary" onClick={() => props.changeArraySize('taller')}>taller</Button>
            <Button size="small" variant="contained" color="primary" onClick={() => props.changeArraySize('shorter')}>shorter</Button>
        </p>
    )
}

export default ChooseArraySize;