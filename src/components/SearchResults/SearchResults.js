import React from 'react';
import { withRouter } from 'react-router-dom';
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


//this component takes an array of colors and displays it
function SearchResults(props) {
  return (
    <div>
    <h1>Search Results</h1>
    <Box>
                Here's a list of all the patterns in the database but we'll actually search in a bit

                <TableBody>
                    {props.store.patternList.map(item => (<TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell><Button onClick={() => props.select(item.id)}>Select</Button></TableCell>
                    </TableRow>))}
                </TableBody>

            </Box>
    </div>
  );
}

const mapStateToProps = (store) => ({
  store
});
export default connect(mapStateToProps)(withRouter(SearchResults));
