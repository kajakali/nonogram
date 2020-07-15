import React, { Component } from "react";
import { connect } from 'react-redux';

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
            {}
            </>
        )
    }
}
const mapStateToProps = (store) => ({
    store
  });

export default connect(mapStateToProps)(CrossStitchPattern);