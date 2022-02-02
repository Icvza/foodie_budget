import React, { Component } from 'react';
import './App.css' ; 
import { connect } from 'react-redux'
import { fetchisLoggedin } from './actions/userActions'
import { UserForm } from '../src/components/UserForm'

class App extends Component {


  componentDidMount(){
    this.props.fetchisLoggedin()
    console.log('Rendsadsadsadsadasddered')
    
  }


  render() { 
    
    return(
      <div>
        <h3>APP RENDERED</h3>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { logged_in: state.user }
}

export default connect(mapStateToProps, { fetchisLoggedin }) (App);
