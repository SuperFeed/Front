import { createSelector } from 'reselect'
import { packageActions } from 'redux-reaction'
import todo from './todo'
import auth from './auth'

export default packageActions({ todo, auth })

export const selector = _ => _
