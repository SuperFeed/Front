'use strict'

require('babel-register')
let fs = require('fs')
let soular = require('soular')
let route = require('soular/route')

fs.readdirSync('functions')
  .map((func) => require('./functions/' + func))
  .reduce((_app, func) => _app.use(route[func.method](func.path)(e => ({ body: func.handler(e) }))), soular('*'))
  .listen(3002)
