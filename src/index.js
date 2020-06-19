import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import logger from 'redux-logger';


const theme = createMuiTheme({
  palette: {
    primary: {main: `#FE6B8B`, 
    mainGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    secondary: {main: `#FF8E53`},
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 13,
  },
  shape: {borderRadius: 8
  },
});

const sagaMiddleware = createSagaMiddleWare();

const middlewareList = process.env.NODE_ENV === 'development' ?
[sagaMiddleware, logger] :
[sagaMiddleware];
const store = createStore(
  rootReducer, 
  applyMiddleware(...middlewareList),

);

sagaMiddleware.run(rootSaga);



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
