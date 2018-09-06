import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {compose, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer, compose(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
