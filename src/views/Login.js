import React, {Component} from 'react';
import {Button, Col, Form, Input, Row} from "reactstrap";
import {Redirect} from "react-router-dom";
import "../SCSS/Login.css";
import Header from "./subviews/Header";
import {LoginContext} from "./contexts/LoginContext"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: undefined,
      loginUsernameInputClass: "",
      loginUsernameClass: "",
      loginPasswordClass: "no-show"
    };
    document.title = "Login into Apothem";

    this.handleChange         = this.handleChange.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleUserSubmit     = this.handleUserSubmit.bind(this);
    this.handleBack           = this.handleBack.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUserSubmit(e) {
    e.preventDefault();
    if (!["", "admin", "ThePhisics101"].includes(this.state.username)) {
      this.setState({loginUsernameInputClass: "is-invalid"});
    } else {
      this.setState({
        loginUsernameClass: "slide-out-left",
        loginPasswordClass: "slide-in-right"
      });
      setTimeout(() => {
        this.setState({
          loginUsernameClass: "no-show"
        })
      }, 290);
    }
  }

  handlePasswordSubmit(e, authenticate) {
    e.preventDefault();
    authenticate(() => {
      this.setState({redirect: this.props.location.state.from || "/home"});
    });
  }

  handleBack() {
    this.setState({
      loginUsernameClass: "slide-in-left",
      loginPasswordClass: "slide-out-right"
    });
    setTimeout(() => {
      this.setState({
        loginPasswordClass: "no-show"
      });
    }, 290)
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect}/>
    }
    return (
      <div className="login-view">
        <Header/>
        <div className="body">
          <p>
            Apothem is an electronic register app for school grades, homework and for communication between
            students and teachers.
          </p>
          <p>
            Apothem also is available as a mobile app, which does not have to be installed directly on your
            phone, but is added to the home screen by your browser.
          </p>
          <Row className="justify-content-sm-center">
            <Col xs="12" sm="auto" className="login-container">
              <h3>Login</h3>
              <Form className={`login ${this.state.loginUsernameClass}`} noValidate onSubmit={this.handleUserSubmit}>
                <Input className={this.state.loginUsernameInputClass} value={this.state.username} name="username"
                       onChange={this.handleChange} placeholder="Username" autoFocus/>
                <Button className="login-btn" color="success">Next</Button>
              </Form>
              <LoginContext.Consumer>
                {({isAuthenticated, authenticate}) => (
                  <Form className={`login ${this.state.loginPasswordClass}`} noValidate onSubmit={(e) => this.handlePasswordSubmit(e, authenticate)}>
                    <Input value={this.state.password} name="password" onChange={this.handleChange} placeholder="Password"
                           type="password"/>
                    <Row>
                      <Col><Button className="login-btn" color="danger" onClick={this.handleBack}>Back</Button></Col>
                      <Col><Button className="login-btn" color="success">Login</Button></Col>
                    </Row>
                  </Form>
                )}
              </LoginContext.Consumer>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;