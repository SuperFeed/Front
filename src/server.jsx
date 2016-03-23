import 'babel-polyfill'

import soular from 'soular'
import serveStatic from 'soular/static'
import router from 'soular/react-router'

import React from 'react'
import { renderToString } from 'react-dom/server'

import routes from './routes'
import Container, { configureStore } from './Container'

const DEBUG = process.env.NODE_ENV !== 'production'
const APP_PORT = DEBUG ? 3001 : process.env.PORT || 8080

soular('*')

.use((ctx) => {
  if (ctx.req.headers['x-forwarded-proto'] === 'http') return {
    status: 302,
    headers: { Location: 'https://' + ctx.req.headers.host + ctx.req.url },
    body: '',
    $force: true
  }
})

.use(router(routes, (content) => {
  const store = configureStore()

  const initialState = JSON.stringify(store.getState())

  const app = renderToString(
    <Container store={store}>
      {content}
    </Container>
  )

  return `
    <!doctype html>
    <html>
      <head>
        <script>window.__REDUX_INIT = ${initialState}</script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js"></script>
          <script src="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.min.js"></script>
          <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="app.js"></script>
      </body>
    </html>
  `
}))

.use(serveStatic('', 'static'))

.listen(APP_PORT)

.on('listening', () => console.log(`Listening at ${APP_PORT}`))
