import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store'
import axios from 'axios';
import UserForm from './components/UserForm';

const store  = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <UserForm />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


