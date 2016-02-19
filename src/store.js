import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import DevTools from './DevTools'
import re from './actions'

export default function configureStore () {
  const store = createStore(
    re.ducer,
    undefined,
    compose(
      applyMiddleware(promiseMiddleware),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('./actions', () =>
      store.replaceReducer(require('./actions').default.ducer)
    )
  }

  return store
}
