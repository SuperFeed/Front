import { Reaction, groupActions } from 'redux-reaction'

const initialState = { todos: [] }

const addTodo = Reaction('add todo', {
  action: (todo) => {
    return todo
  },
  reducer: (state, action) => ({
    todos: [
      ...state.todos,
      action.payload
    ]
  })
})

const clearTodos = Reaction('clear todos', {
  reducer: () => initialState
})

export default groupActions({ addTodo, clearTodos }, initialState)
