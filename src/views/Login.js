import React, {Component} from 'react';
import {Button, Col, Form, Input, Row} from "reactstrap";
import Header from "./subviews/Header";
import {Redirect} from "react-router-dom";
import history from "./utils/history";
import {LoginContext} from "./contexts/LoginContext"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      login: 0,
      redirect: undefined,
      from: props.from
    };
    document.title = "Login into Apothem";

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUserSubmit(e) {
    e.preventDefault();
    if (!["", "admin", "ThePhisics101"].includes(this.state.username)) {
      e.target["username"].classList.add("is-invalid");
    } else {
      setTimeout(() => {
        this.setState({login: 1})
      }, 200);
    }
  }

  handlePasswordSubmit(e, authenticate) {
    e.preventDefault();
    authenticate(() => {
      history.push("/login");
      this.setState({redirect: this.state.from || "/home"});
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}/>
    }

    // TODO: animated transitions
    const formUsername = (
      <Form className="login" noValidate onSubmit={this.handleUserSubmit}>
        <Input value={this.state.username} name="username" onChange={this.handleChange} placeholder="Username" autoFocus/>
        <Button className="login-btn" color="success">Next</Button>
      </Form>
    );
    const formPassword = (
      <LoginContext.Consumer>
        {({isAuthenticated, authenticate}) => (
          <Form className="login" noValidate onSubmit={(e) => this.handlePasswordSubmit(e, authenticate)}>
            <Input value={this.state.password} name="password" onChange={this.handleChange} placeholder="Password"
                   autoFocus type="password"/>
            <Button className="login-btn" color="success">Login</Button>
          </Form>
        )}
      </LoginContext.Consumer>
    );
    return (
      <div className="App-login">
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
            <Col xs="12" sm="auto">
              <h3>Login</h3>
              {[formUsername, formPassword][this.state.login]}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;