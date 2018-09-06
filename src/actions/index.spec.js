import * as actions from '.'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', async () => {
    const result = await new Promise((resolve, reject) => {
      actions.addTodo(resolve, 'Use Redux', reject)
    })
    expect(result).toEqual({
      _id: 0,
      text: 'Use Redux',
      type: 'ADD_TODO'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      _id: 1,
      type: 'TOGGLE_TODO'
    })
  })
})
