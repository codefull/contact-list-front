import { createStore } from 'redux'
import rootReducer from '../reducers';

const configureStore = (initialState: any = []) => {
  return createStore(rootReducer, initialState)
}

export default configureStore
