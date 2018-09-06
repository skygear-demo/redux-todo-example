import todos from './todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        todo: {
          text: 'Run the tests',
          _id: 0
        }
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        _id: 0
      }
    ])

    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            _id: 0
          }
        ],
        {
          type: 'ADD_TODO',
          todo: {
            text: 'Use Redux',
            _id: 1
          }
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        _id: 0
      },
      {
        text: 'Use Redux',
        completed: false,
        _id: 1
      }
    ])

    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            _id: 0
          },
          {
            text: 'Use Redux',
            completed: false,
            _id: 1
          }
        ],
        {
          type: 'ADD_TODO',
          todo: {
            text: 'Fix the tests',
            _id: 2
          }
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        _id: 0
      },
      {
        text: 'Use Redux',
        completed: false,
        _id: 1
      },
      {
        text: 'Fix the tests',
        completed: false,
        _id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            _id: 1
          },
          {
            text: 'Use Redux',
            completed: false,
            _id: 0
          }
        ],
        {
          type: 'TOGGLE_TODO',
          _id: 1
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        _id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        _id: 0
      }
    ])
  })
})
