// Import All Modules
import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Import Components
import {
  AuthLayout,
  NavbarLanding
} from '../components'

// Import Views
import LandingPage from '../views/LandingPage'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Forgot from '../views/auth/Forgot'
import CreatePin from '../views/auth/CreatePin'
import Activated from '../views/auth/Activated'

function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <NavbarLanding>
          <LandingPage />
        </NavbarLanding>
      </Route>
      <Route path="/auth/login" exact>
        <AuthLayout>
          <Login />
        </AuthLayout>
      </Route>
      <Route path="/auth/register">
        <AuthLayout>
          <Register />
        </AuthLayout>
      </Route>
      <Route path="/auth/forgot">
        <AuthLayout>
          <Forgot />
        </AuthLayout>
      </Route>
      <Route path="/auth/create-pin">
        <AuthLayout>
          <CreatePin />
        </AuthLayout>
      </Route>
      <Route path="/auth/activated">
        <AuthLayout>
          <Activated />
        </AuthLayout>
      </Route>
    </Switch>
  )
}

export default Router
