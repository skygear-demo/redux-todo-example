import skygearAPI from '../api/skygear'

export const getAllTodos = () => dispatch => {
  skygearAPI.getItems(todos => {
    console.log(todos);
    dispatch(receiveTodos(todos))
  })
  
  dispatch({ type: 'FETCH_TODOS' });
}

export const receiveTodos = todos => ({
  type: 'RECEIVE_TODOS',
  todos
})

export const fetchTodos = () => ({
  type: 'FETCH_TODOS'
})


export const addTodo = text => dispatch => {
  //save to skygear
  skygearAPI.saveItem(text, todo => {
    console.log('saved to cloud');
    dispatch({
      type: 'ADD_TODO',
      todo
    });
  })
}


export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (_id) => ({
  type: 'TOGGLE_TODO',
  _id
})
