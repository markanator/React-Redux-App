import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MortyReducer } from './reducers';

// import Thunk
import Thunk from 'redux-thunk';

const logger = ({ getState }) => next => action => {
  console.log("Dispatching: ", action);
  next(action);
};

// REDUX store
const store = createStore(MortyReducer, applyMiddleware(logger, Thunk))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
