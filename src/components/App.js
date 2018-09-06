import React from 'react'
import {connect} from 'react-redux'
import {func} from 'prop-types'

import skygearAPI from '../api/skygear'
import {getAllTodos} from '../actions'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

class App extends React.Component {
  static propTypes = {
    dispatch: func.isRequired
  }

  componentDidMount() {
    skygearAPI.then(getAllTodos(this.props.dispatch))
  }

  render() {
    return (
      <div>
        <h1>Skygear x Redux Todo</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default connect()(App)
