import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <h1>Skygear x Redux Todo</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
