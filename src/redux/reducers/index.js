// Import All Modules
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'

// Import Reducers
import authReducer from './auth'
import userReducer from './user'

// Persist Cpnfiguration
const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth']
}

const authPersistConfig = {
  key: 'auth',
  storage,
  statereConciler: hardSet
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer
})

export default persistReducer(rootPersistConfig, rootReducer)