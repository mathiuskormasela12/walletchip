import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {connect} from 'react-redux'


class ProtectedRoute extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <Route {...this.props}>
            {
               (this.props.auth.token) ? this.props.children : <Redirect to={{pathname: '/auth/login'}}/>
            }
         </Route>
      )
   }
}

const mapStateToProps = (state) => ({
   auth: state.auth
 })


export default connect(mapStateToProps)(ProtectedRoute)