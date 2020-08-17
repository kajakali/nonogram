import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    color: props => ({
        backgroundColor: props.backgroundColor,
      }),
    root: {
      color: '#DDDDDD',
      height: 13    ,
      width: 13,
      borderTop: "1px #FFFFFF",
      borderLeft: "1px #FFFFFF",


      display: 'inline-block',
    },
    highlight: {
      borderColor: "#EEEEEE"
    }
  });


export default function Square(props) {

    const classes = useStyles(props);


    return(
        <>
            <div className={`${classes.root} ${classes.color} ${props.highlight && classes.highlight}`}  
            onClick={props.onClick}   
            />
        </>

            
    );
}

