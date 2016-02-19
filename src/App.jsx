import React, { Component } from 'react'
import { connect } from 'react-redux'
import re from './actions'
import { SF_API } from './api'

const selector = (state) => ({
  ...state
})

class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      text: '',
      sfVersion: ''
    }
  }

  async componentDidMount () {
    let { version: sfVersion } = await SF_API.get('version')

    this.setState({ sfVersion })
  }

  handleUpdate (event) {
    this.setState({
      text: event.target.value
    })
  }

  addTodo () {
    this.props.actions.addTodo(this.state.text)
    this.setState({
      text: ''
    })
  }

  render () {
    const { actions, todo } = this.props

    return <div className='ui container'>
      <h1>SuperFeed Version: {this.state.sfVersion}</h1>
      <button className='ui red button' onClick={actions.clearTodos}>Clear</button>
      <button className='ui green button' onClick={::this.addTodo}>Add</button>
      <div className='ui input'>
        <input type='text' value={this.state.text} onChange={::this.handleUpdate} placeholder='TODO item'/>
      </div>

      <ul className='ui list'>
        {todo.todos.map((t) =>
          <li className='ui item' key={t}>{t}</li>)
        }
      </ul>
    </div>
  }
}

export default connect(selector, re.action)(App)
