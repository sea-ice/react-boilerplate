import React from 'react'
import {Provider} from 'react-redux'

import configureStore from '../../pages/Home/configureStore'
import App from '../../pages/Home/components/App'

export default class Home extends React.Component {
  render () {
    let {initialState, ...props} = this.props
    let store = configureStore(initialState)
    return (
      <Provider store={store}>
        <App {...props} />
      </Provider>
    )
  }
}
