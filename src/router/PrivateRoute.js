import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {connect} from 'react-redux'


class PrivateRoute extends Component {
   
   render() {
      const Component = this.props.privateComponent
      return (
         <Route {...this.props} render={(props) => {
            if(this.props.auth.token){
               return <Component {...props}/>
            } else {
               return <Redirect to={{pathname: '/auth/login', state: {from: props.location} }}/>
            }
         }}>
         </Route>
      )
   }
}

const mapStateToProps = (state) => ({
   auth: state.auth
 })


export default connect(mapStateToProps)(PrivateRoute)