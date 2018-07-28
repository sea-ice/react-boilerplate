import {createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from '../../reducers/Home'

export default function configureStore (initialState = {}) {
  let middlewares = [createLogger()]
  let store = createStore(combineReducers({
    ...rootReducer
  }), initialState, applyMiddleware(...middlewares))
  return store
}
