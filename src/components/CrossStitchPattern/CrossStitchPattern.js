import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class CrossStitchPattern extends Component {
    state = ({
        crossStitchId: 1,
    })
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_A_CROSSSTITCH', payload:{id: this.state.crossStitchId}});
    }
    render() {
        return(
            <>
            I'm a cross stitch pattern
            {JSON.stringify(this.props.store.crossStitch)}
            <Button color='primary' variant='contained' onClick={() => this.props.history.push('/nonogram')}>Go to the nonogram section</Button>
            </>
        )
    }
}
const mapStateToProps = (store) => ({
    store
  });

export default connect(mapStateToProps)(CrossStitchPattern);