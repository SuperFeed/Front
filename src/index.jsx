import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'semantic-ui-css/semantic.css'

import Container, { configureStore } from './Container'
import App from './App'
import Login from './Login'

const SuperFeed = <Container store={configureStore()}>
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={App} />
      <Route path='/login' component={Login} />
    </Route>
  </Router>
</Container>

ReactDOM.render(SuperFeed, document.getElementById('root'))
