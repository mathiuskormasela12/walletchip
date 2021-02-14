// Import All Modules
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Import Components
import {
  NavbarLanding,
  Navbar,
  Footer
} from '../components'

//import privateRoute
import PrivateRoute from './PrivateRoute';

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
import PersonalInformation from '../views/Profile/PersonalInformation'
import ChangePassword from '../views/Profile/ChangePassword'
import ChangePIN from '../views/Profile/ChangePIN'
import NewPin from '../views/Profile/ChangePIN/NewPin'

import Confirmation from '../views/Transfer/Confirmation'
import InputAmount from '../views/Transfer/Input-Amount'
import TransferSuccess from '../views/Transfer/TransferSuccess'

function Router() {
  const pinValid = useSelector(state => state.main.pinValid)

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
      <Route path="/auth/create-pin/:token">
        <CreatePin />
      </Route>
      <Route path="/auth/forgot/reset-password/:token">
        <ResetPassword />
      </Route>
      <Route path="/auth/activated/">
        <Activated />
      </Route>
      <PrivateRoute exact path='/dashboard' privateComponent={Home} />
      <PrivateRoute exact path='/dashboard/history' privateComponent={History} />
      {/* <Route path="/dashboard" exact>
        <Navbar>
          <Home />
        </Navbar>
        <Footer />
      </Route> */}
      {/* <Route path="/dashboard/history">
        <Navbar>
          <History />
        </Navbar>
        <Footer />
      </Route> */}
      <Route path="/transfer" exact>
        <Navbar>
          <Transfer />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/transfer/input-amount/:id" exact>
        <Navbar>
          <InputAmount />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/transfer/input-amount/:id/confirm" exact>
        <Navbar>
          <Confirmation />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/transfer/input-amount/:id/confirm/success" exact>
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
      <Route path="/profile/:username" exact>
        <Navbar>
          <PersonalInformation />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/profile/:username/change-password">
        <Navbar>
          <ChangePassword />
        </Navbar>
        <Footer />
      </Route>
      <Route path="/profile/:username/change-pin">
        <Navbar>
          {
            pinValid ? <NewPin /> : <ChangePIN />
          }
        </Navbar>
        <Footer />
      </Route>
      <Route path="*">
        <NavbarLanding>
          <LandingPage />
        </NavbarLanding>
      </Route>
    </Switch>
  )
}

export default Router
