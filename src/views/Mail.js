import React, {Component} from 'react';
import NavBar from "./subviews/NavBar";

class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    document.title = "Apothem Mail";
  }

  render() {
    return (
      <div className="App-mail">
        <NavBar active="mail"/>
      </div>
    );
  }
}

export default Mail;