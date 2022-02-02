import axios from "axios"

export const fetchUser = () => {
     return(dispatch) => {
          fetch('http://127.0.0.1:3000/users')
          .then(resp => resp.json())
          .then(user => dispatch({type :"FETCH_USER", payload: user}))
     }
}

export const addUser = (user) => {
     return dispatch => {
          fetch('http://127.0.0.1:3001/users', {
               method: "POST",
               headers: {
                   "Accept": "application/json",
                   "Content-Type": "application/json"
               },
               body: JSON.stringify({
                 user:{
                   username: user.username,
                   password: user.password,
                   firstname: user.firstname,
                   lastname: user.lastname,
                   email: user.email
                 }
               })
             })
             .then(response => response.json())
             .then(user => dispatch({ type: 'ADD_USER', payload: user}))
     }
}

export const fetchisLoggedin = () => {
     return dispatch => {
          axios.get('http://127.0.0.1:3001/logged_in', 
          {withCredentials: true})
          .then(resp => dispatch({type :'LOGGED_IN_STATUS', payload: resp.data}))
     }
}

