import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './containers/Home'

let routes = (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
)

export default routes
