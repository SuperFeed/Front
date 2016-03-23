import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import re, { selector } from './actions'

const APP_ID = process.env.NODE_ENV === 'production'
  ? '1704028006536118'
  : '1704068519865400'

@connect(selector, re.action)
export default class Login extends Component {
  onLogin (res) {
    if (res.accessToken) browserHistory.push('/app')
  }

  render () {
    return <FacebookLogin
      appId={APP_ID}
      autoLoad={this.props.auto !== undefined ? this.props.auto : true}
      callback={res => this.props.actions.login(res) && this.onLogin(res)}
    />
  }
}
