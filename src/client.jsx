import React from 'react'
import ReactDOM from 'react-dom'
import { Router, match, browserHistory as history } from 'react-router'

import routes from './routes'
import Container, { configureStore } from './Container'

match({ history, routes }, (error, redirectLocation, renderProps) => {
  if (error) return console.error(error)

  ReactDOM.render(
    <Container store={configureStore()}>
      <Router {...renderProps} />
    </Container>, document.getElementById('root')
  )
})
