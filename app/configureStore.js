import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { createHashHistory } from 'history'
import { routerMiddleware, routerReducer } from 'react-router-redux'

import rootReducer from './reducers'

let history = createHashHistory()
const ConfigureStore = (initialState = {}) => {
  let router = routerMiddleware(history)

  let middlewares = [createLogger(), router]

  let store = createStore(combineReducers({
    ...rootReducer,
    router: routerReducer
  }), initialState, applyMiddleware(...middlewares))

  return store
}

export {
  ConfigureStore,
  history
}
