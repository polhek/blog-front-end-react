import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

axios.defaults.baseURL = 'https://fierce-everglades-07063.herokuapp.com/';

const store = createStore(
  userReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
