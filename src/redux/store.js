// Import All Modules
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

// Import Reducers
import rootReducer from './reducers'

const persistedStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  let store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  )
  let persistor = persistStore(store)
  return { store, persistor }
}

export default persistedStore