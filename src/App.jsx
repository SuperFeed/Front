import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SF_API } from './api'
import re, { selector } from './actions'

@connect(selector, re.action)
export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className='ui button'>
      Auth: {JSON.stringify(this.props.auth)}
    </div>
  }
}
