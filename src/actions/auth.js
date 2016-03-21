import { Reaction, groupActions } from 'redux-reaction'

const initialState = {
  accessToken: null,
  id: null,
  name: null
}

const login = Reaction('login', {
  reducer (state, { payload: { accessToken, id, name } }) {
    return { accessToken, id, name }
  }
})

const logout = Reaction('logout', {
  reducer () {
    return initialState
  }
})

export default groupActions({ login, logout }, initialState)
