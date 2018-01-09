const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          _id: action.todo._id,
          text: action.todo.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo._id === action._id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'FETCH_TODOS':
      return state
    case 'RECEIVE_TODOS':
      return [...state, ...action.todos]

    default:
      return state
  }
}

export default todos
