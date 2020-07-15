import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    console.log('hi ice cream');
        props.submitName(name);
  };

  

  return (
    <div>
      <Button variant="outlined" color="primary" size="small" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Name your Pattern
          </DialogContentText>
          <TextField
            autoFocus
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            margin="dense"
            id="name"
            label="Pattern Name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit Name!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}