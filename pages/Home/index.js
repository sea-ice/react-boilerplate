import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/App'
import configureStore from './configureStore'

let root = document.getElementById('root')
let store = configureStore(window.initialState)

ReactDOM.render(
  <Provider store={store}>
    <App isServer={false} />
  </Provider>
, root)
