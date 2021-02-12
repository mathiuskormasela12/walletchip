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
import History from '../views/Dashboard/History'

import Transfer from '../views/Transfer/Home'

import TopUp from '../views/TopUp'

import Profile from '../views/Profile/Home'
import Confirmation from '../views/Transfer/Confirmation'
import InputAmount from '../views/Transfer/Input-Amount'
import TransferSuccess from '../views/Transfer/TransferSuccess'

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
      <Route path="/dashboard/history">
        <Navbar>
          <History />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/transfer" exact>
        <Navbar>
          <Transfer />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/transfer/input-amount/" exact>
        <Navbar>
          <InputAmount />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/transfer/input-amount/confirm" exact>
        <Navbar>
          <Confirmation />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/transfer/input-amount/confirm/success" exact>
        <Navbar>
          <TransferSuccess />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/topup" exact>
        <Navbar>
          <TopUp />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/profile" exact>
        <Navbar>
          <Profile />
        </Navbar>
        <Footer />
      </Route>
    </Switch>
  )
}

export default Router
