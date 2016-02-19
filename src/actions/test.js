import { Reaction, groupActions } from 'redux-reaction'

const initialState = { test: true }

const addTest = Reaction('add test', {
  async action (state) {
    return await Promise.resolve(true)
  },
  reducer: (state, action) => ({ test: action.payload })
})

const unTest = Reaction('un test', {
  reducer: (state, action) => ({ test: false })
})

export default groupActions({ addTest, unTest }, initialState)
