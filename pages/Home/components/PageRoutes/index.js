import React from 'react'
import {Switch, Route} from 'react-router'

import UserDetail from '../UserDetail'

export default class AppRoutes extends React.Component {
  wrapComponent (Wrapped) {
    let appRouteProps = this.props
    return class extends React.Component {
      render () {
        let props = Object.assign({}, appRouteProps, this.props)
        return <Wrapped {...props} />
      }
    }
  }
  render () {
    return (
      <Switch>
        <Route
          exact
          path='/'
          component={this.wrapComponent(UserDetail)} />
        <Route
          path='/user/:id'
          component={this.wrapComponent(UserDetail)} />
      </Switch>
    )
  }
}
