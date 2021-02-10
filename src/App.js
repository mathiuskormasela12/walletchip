// Import All Modules
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'popper.js'

// Import Router
import Router from './router'

// State Management
import persistedStore from './redux/store'

//import main css
import './assets/css/App.css'

function App() {
  const {store, persistor} = persistedStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router/>
      </PersistGate>
    </Provider>
  )
}

export default App;
