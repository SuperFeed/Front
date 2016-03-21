import { packageActions } from 'redux-reaction'
import auth from './auth'

export default packageActions({ auth })

export const selector = (state) => state
