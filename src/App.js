import React, {Component} from 'react';
import './SCSS/App.css';
import {Router, Route, Redirect} from 'react-router-dom';
import {withCookies, Cookies} from 'react-cookie';
import PropTypes from 'prop-types';

import Login from "./views/Login";
import Home from "./views/Home";
import Mail from "./views/Mail";
import Test from "./views/Test";
import history from "./views/utils/history";
import {ThemeContext} from "./views/contexts/ThemeContext";
import {LoginContext} from "./views/contexts/LoginContext";
import PrivateRoute from "./views/elems/PrivateRoute";

class App extends Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const session = props.cookies.get("session");

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
        isAuthenticated: session === "1337",
        authenticate: (cb) => {
          console.log("auth-ing...");
          props.cookies.set("session", "1337");
          this.setState(state => ({
            loginContext: {
              isAuthenticated: true,
              authenticate: state.loginContext.authenticate,
              signOut: state.loginContext.signOut
            }
          }));
          setTimeout(cb, 100)
        },
        signOut: (cb) => {
          this.setState(state => ({
            loginContext: {
              isAuthenticated: false,
              authenticate: state.loginContext.authenticate,
              signOut: state.loginContext.signOut
            }
          }));
          setTimeout(cb, 100)
        }
      }
    };
  }

  render() {
    console.log(`auth: ${this.state.loginContext.isAuthenticated}`);
    return (
      <ThemeContext.Provider value={this.state.themeContext}>
      <LoginContext.Provider value={this.state.loginContext}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={() => <Redirect to="/home"/>}/>
            <Route path="/login" component={Login}/>
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
