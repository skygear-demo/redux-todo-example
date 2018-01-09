import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import {compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import skygearAPI from './api/skygear'

import { getAllTodos } from './actions'
const store = createStore(reducer,
  compose(applyMiddleware(thunk)))
  
// Config Skygear
skygearAPI.config(skygearContainer => {
  skygearAPI.signupAnonymously(user => { // Signup a skygear user 
    // Now we have a user to fetch the itmes from cloudDB
    store.dispatch(getAllTodos())
  })
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)