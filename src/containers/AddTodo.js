import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = connect()(({dispatch}) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          const val = input.value.trim()
          input.value = ''

          if (val) addTodo(dispatch, val)
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
})

export default AddTodo
