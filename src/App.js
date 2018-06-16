import React, {Component} from 'react';
import './SCSS/App.css';
import {Router, Route} from 'react-router-dom';
import Login from "./views/Login";
import Home from "./views/Home";
import Mail from "./views/Mail";
import history from "./views/utils/history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/mail" component={Mail}/>
        </div>
      </Router>
    );
  }
}

export default App;
