import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';



const _initialState = {
  pending: false,
  contacts: [],
  error: ""
}

const configureStore = (initialState: any = _initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

export default configureStore
