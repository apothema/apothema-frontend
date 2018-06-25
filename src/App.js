import React, {Component} from 'react';
import './SCSS/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {withCookies, Cookies} from 'react-cookie';
import PropTypes from 'prop-types';

import Login from "./views/Login";
import Home from "./views/Home";
import Mail from "./views/Mail";
import Test from "./views/Test";
import About from "./views/About";
import ForDevs from "./views/ForDevs";
import {ThemeContext} from "./views/contexts/ThemeContext";
import {LoginContext} from "./views/contexts/LoginContext";
import PrivateRoute from "./views/elems/PrivateRoute";

class App extends Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      themeContext: {
        theme: "light",
        toggleTheme: () => {
          this.setState(state => ({
            themeContext: {
              theme: state.themeContext.theme === "dark" ? "light" : "dark",
              toggleTheme: state.themeContext.toggleTheme
            }
          }));
        }
      },
      loginContext: {
        isAuthenticated: props.cookies.get("session") === "1337",
        authenticate: (cb) => {
          props.cookies.set("session", "1337");
          this.setState(state => ({
            loginContext: {
              isAuthenticated: true,
              authenticate: state.loginContext.authenticate,
              signOut: state.loginContext.signOut
            }
          }));
          if (typeof cb === "function") setTimeout(cb, 100);
        },
        signOut: (cb) => {
          props.cookies.remove("session");
          this.setState(state => ({
            loginContext: {
              isAuthenticated: false,
              authenticate: state.loginContext.authenticate,
              signOut: state.loginContext.signOut
            }
          }));
          if (typeof cb === "function") setTimeout(cb, 100);
        }
      }
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.themeContext}>
      <LoginContext.Provider value={this.state.loginContext}>
        <Router>
          <div className="App">
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/devs" component={ForDevs}/>
            <PrivateRoute auth={this.state.loginContext.isAuthenticated} path="/home" component={Home}/>
            <PrivateRoute auth={this.state.loginContext.isAuthenticated} path="/mail" component={Mail}/>
            <Route path="/test" component={Test}/>
          </div>
        </Router>
      </LoginContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default withCookies(App);
