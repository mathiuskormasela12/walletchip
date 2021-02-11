// Import All Modules
import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Import Components
import {
  AuthLayout,
  NavbarLanding,
  Navbar,
  Footer
} from '../components'

// Import Views
import LandingPage from '../views/LandingPage'

import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Forgot from '../views/auth/Forgot'
import CreatePin from '../views/auth/CreatePin'
import Activated from '../views/auth/Activated'
import ResetPassword from '../views/auth/ResetPass'

import Home from '../views/Dashboard/Home'

function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <NavbarLanding>
          <LandingPage />
        </NavbarLanding>
      </Route>
      <Route path="/auth/login" exact>
        <Login />
      </Route>
      <Route path="/auth/register">
        <Register />
      </Route>
      <Route exact path="/auth/forgot">
          <Forgot />
      </Route>
      <Route path="/auth/create-pin">
        <CreatePin />
      </Route>
      <Route path="/auth/forgot/reset-password">
        <ResetPassword />
      </Route>
      <Route path="/auth/activated">
        <AuthLayout>
          <Activated />
        </AuthLayout>
      </Route>
      <Route path="/dashboard" exact>
        <Navbar>
          <Home />
        </Navbar>
        <Footer />
      </Route>
    </Switch>
  )
}

export default Router
