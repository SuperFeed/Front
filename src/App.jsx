import React, { Component } from 'react'
import { connect } from 'react-redux'
import re from './actions'

const selector = (state) => ({
  ...state
})

class App extends Component {
  render () {
    const { actions, testActions } = this.props

    return <div className='ui container'>
      <button className='ui primary button' onClick={actions.addTest}>Set Test</button>
      <button className='ui button' onClick={actions.unTest}>Unset Test</button>
      <div>
        {testActions.test
          ? <i className='big green checkmark icon'></i>
        : <i className='big red remove icon'></i>
        }
      </div>
    </div>
  }
}

export default connect(selector, re.action)(App)
