import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class PatternTable extends React.Component{
    state = ({
        patternList: []
    });
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ALL_PATTERNS'});
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps !== this.props){
            this.setState({patternList: this.props.store.patternList})
        }
    }

    render(){
        return(

            <Box>
                Here's a list of all the patterns in the database

                <TableBody>
                    {this.props.store.patternList.map(item => (<TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell><Button onClick={() => this.props.select(item.id)}>Select</Button></TableCell>
                    </TableRow>))}
                </TableBody>

            </Box>
        );
    }
};

const mapStateToProps = (store) => ({
    store
  });

export default connect(mapStateToProps)(PatternTable);