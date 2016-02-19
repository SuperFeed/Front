import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.css'

import DevTools from './DevTools'
import configureStore from './store'
import App from './App'

const store = configureStore()

const SuperFeed = <Provider store={store}>
  <div>
    {process.env.NODE_ENV !== 'production' ? <DevTools /> : null}
    <App />
  </div>
</Provider>

window.onload = () => {
  if (document.getElementById('root') === null) {
    let reactRoot = document.createElement('div')
    reactRoot.id = 'root'
    document.body.appendChild(reactRoot)
  }

  ReactDOM.render(SuperFeed, document.getElementById('root'))
}
