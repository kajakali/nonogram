import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


//this component takes an array of colors and displays it
function SearchResults(props) {
  return (
    <div>
    <h1>Search Results</h1>
      <p>I'm the search results for your search I should have a match param.</p>
    {JSON.stringify(props)}
    </div>
  );
}

export default withRouter(SearchResults);
