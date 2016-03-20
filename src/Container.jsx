import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import promiseMiddleware from 'redux-promise'
import re from './actions'

const Devtools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' changeMonitorKey='ctrl-m'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

export const configureStore = (initialState) => {
  const store = createStore(
    re.ducer,
    initialState,
    compose(
      applyMiddleware(promiseMiddleware),
      Devtools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('./actions', () =>
      store.replaceReducer(require('./actions').default.ducer)
    )
  }

  return store
}

export default class Container extends Component {
  render () {
    return <Provider store={this.props.store}>
      <div>
        {process.env.NODE_ENV !== 'production' ? <Devtools /> : null}
        {this.props.children}
      </div>
    </Provider>
  }
}
