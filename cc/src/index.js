  import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Coach from './screens/login/coach';
import Trainee from './screens/login/trainee';
import Admin from './screens/login/admin';

ReactDOM.render(
  <Router>
  <div className="App">
    <Route exact path="/" component={App} />
    <Route exact path="/coach" component={Coach} />
    <Route exact path="/trainee" component={Trainee} />
    <Route exact path="/admin" component={Admin} />
    
    
  </div>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
