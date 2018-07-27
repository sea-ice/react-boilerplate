import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

let root = document.getElementById('root')
let data = JSON.parse(root.dataset.cookData)
ReactDOM.render(
  <App {...data} />
, document.getElementById('root'))
