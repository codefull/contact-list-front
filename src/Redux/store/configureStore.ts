import { createStore } from 'redux'

const configureStore = (initialState: any) => {
  return createStore(initialState)
}

export default configureStore
