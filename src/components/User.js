import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'

class User extends Component {
     UNSAFE_componentWillMount() {
          this.props.fetchUser()
          //console.log(this.porps.user)
     }

   

     render() {
          const userContent = this.props.user.map(user => (
               <div key={user.id}>
                    <h3> {user.firstName} </h3>
               </div>
          ))

          return(
               <div id='user-card'>

                    {userContent}

               </div>
          )
     }
}

const mapStateToProps = (state) => {
     return { user: state.user}
 }

export default connect(mapStateToProps, { fetchUser })(User)