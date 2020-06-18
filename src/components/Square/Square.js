import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    color: props => ({
        backgroundColor: props.backgroundColor,
      }),
    root: {
      color: 'white',
      height: 13    ,
      width: 13,
      margin: 1,
      display: 'inline-block',
    },
  });


export default function Square(props) {

    const classes = useStyles(props);


    return(
        <>
            <div className={`${classes.root} ${classes.color}`}     
            />
        </>

            
    );
}

