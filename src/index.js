import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider as UsersContext} from './Context/UsersContext'

ReactDOM.render(
  <React.StrictMode>
    <UsersContext>
    <Router>
      <App/>
    </Router>
    </UsersContext>
  </React.StrictMode>,
  document.getElementById('root')
);

