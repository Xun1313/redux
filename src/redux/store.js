import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
//import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers({
  ...reducers
}), composeEnhancers(
  applyMiddleware(ReduxThunk)
))

/* export default createStore(combineReducers({
  ...reducers
}), applyMiddleware(ReduxThunk)) */