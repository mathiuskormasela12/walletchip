// Import All Modules
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

// Import Reducers


// Persist Cpnfiguration
const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const rootReducer = combineReducers({

})

export default persistReducer(rootPersistConfig, rootReducer)