import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



//this component takes an array of colors and displays it
function SearchFunction(props) {
  const [value, setValue] = React.useState("2");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
    <h1>Search Function</h1>
    <TextField>

    </TextField>
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="colors" name="number of colors" value={value} onChange={handleChange}>
      {["1", "2", "3", "4", "5", "6", "7", "8"].map(number => <FormControlLabel value={number} control={<Radio />} label={number} />)}
      </RadioGroup>
    </FormControl>
    <Button>
      Search
    </Button>
        <p> soon I'll have search options and a button to start the search</p>
    </div>
  );
}

export default withRouter(SearchFunction);
