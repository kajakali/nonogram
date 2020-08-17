import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';



//this component takes an array of colors and displays it
function FourOhFour(props) {
  return (
    <div>
    <h1>404</h1>
      <p>I'm a 404 page, you must be lost. Go somewhere else.</p>
      <Button color='primary' variant="contained" onClick={() => props.history.push('/')}>Go home</Button>
    </div>
  );
}

export default withRouter(FourOhFour);
