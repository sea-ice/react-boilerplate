import React, { Component } from 'react'
import { connect } from 'react-redux'

import Example from '../components/Example'

class Home extends Component {
  render () {
    return <Example />
  }
}

export default connect(state => ({}), dispatch => ({}))(Home)
