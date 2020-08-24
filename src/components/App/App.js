import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nonogram from '../Nonogram/Nonogram';
import CrossStitchPattern from '../CrossStitchPattern/CrossStitchPattern';
import FourOhFour from './FourOhFour'; 
import Box from '@material-ui/core/Box';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


//TODO GENERAL:
//get a router in here so that I can send people to a page to show a pattern to work on by its id
//get a table of all the patterns in the database
function App(props) {
  return (
    <Box p={4}>
          <Router>
            <header styles={{backgroundColor: '#EEEEEE'}}>
          <h1>colorful logic problems!</h1>
          <p>Hello. This is not a complete app, it's just a place for
          me to work on how to build a nonogram/griddler type puzzle in react
          Right now, you can select a color from one of the color choice squares on the nonogram page
          and then any square you click will turn that color. I started this around June 15th, 2020.</p>
        </header>
        <div>
          {/* <Nav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/nonogram" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/nonogram"
              component={Nonogram}
            />
            <Route
              exact
              path="/crossstitch"
              component={CrossStitchPattern}
            />
    
      
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
      {/*       <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            /> */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/view/:color_id/:project_id"
              component={ViewColor}
            />
            <ProtectedRoute
              exact
              path="/projectslist"
              component={ProjectsList}
            />
            <ProtectedRoute
              exact
              path="/threadlist"
              component={ThreadList}
            />
            <ProtectedRoute
              exact
              path="/addproject"
              component={AddProject}
            />

            <ProtectedRoute
              exact
              path="/project/:id"
              component={IndividualProject}
            /> */}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route component={FourOhFour} />
          </Switch>
    {/*      <Footer /> */}
        </div>
      </Router>
    </Box>
   

  );
}

export default App;
