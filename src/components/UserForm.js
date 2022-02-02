import React, { Component } from 'react';
import { addUser } from '../actions/userActions'
import { connect } from 'react-redux'


class UserForm extends Component {

     state = {
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
     }


     handleSubmit = e => {
          e.preventDefault()
          this.props.addUser(this.state)
          this.setState({
               firstname: '',
               lasname: '',
               email: '',
               username: '',
               password: ''

          })
     }

     handleChange = e => {
          const { name, value } = e.target
          this.setState(
               {
                    [name]: value
               }
          )
     }


     render(){
          return (
          <div className="create-user-form">
               <form className= "create-user" onSubmit={this.handleSubmit}>
                    <label className="create-user-input"> First name </label>
                    <input type='text' value={this.state.firstname} onChange={this.handleChange} name='firstname'/>
                    <br/>
                    <label className="create-user-input"> Last name </label>
                    <input type='text' value={this.state.lastname} onChange={this.handleChange} name='lastname'/>
                    <br/>
                    <label className="create-user-input"> Email </label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name='email'/>
                    <br/>
                    <label className="create-user-input"> username </label>
                    <input type='text' value={this.state.username} onChange={this.handleChange} name='username'/>
                    <br/>
                    <label className="create-user-input"> password</label>
                    <br/>
                    <input type='text' value={this.state.password} onChange={this.handleChange} name='password'/>
                    <input className="create-user-button" type='submit' value='create user'/>
               </form>
          </div>
          )
     }
}


export default connect(null, { addUser })(UserForm)