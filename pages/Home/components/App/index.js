import React from 'react'
import {StaticRouter} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import CustomLink from '../CustomLink'
import PageRoutes from '../PageRoutes'

@connect(state => ({
  ...state
}))
class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let {user, users, isServer, location} = this.props
    let items = users.map((user) => <li
      key={user.id}
      data-userid={user.id}
    >
      <CustomLink to={`/user/${user.id}`}>
        {user.name}
      </CustomLink>
    </li>)

    let children = (
      <div className="home">
        <h1>Hello, {user.name}!</h1>
        <ul>{items}</ul>
        <PageRoutes {...this.props} />
      </div>
    )
    return isServer ? React.createElement(StaticRouter, {
      context: {},
      location
    }, children) : React.createElement(BrowserRouter, {}, children)
  }
}

export default App
