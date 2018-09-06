import skyPromise from '../api/skygear'

export const getAllTodos = dispatcher => async () => {
  const sky = await skyPromise
  const todos = await sky.getItems()
  dispatcher({
    type: 'RECEIVE_TODOS',
    todos
  })
}

export const addTodo = async (dispatcher, text) => {
  const sky = await skyPromise
  const todo = await sky.saveItem(text)
  console.log('saved to cloud', todo)
  dispatcher({
    type: 'ADD_TODO',
    todo
  })
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = _id => ({
  type: 'TOGGLE_TODO',
  _id
})
