import React, {Component} from 'react';
import NavBar from "./subviews/NavBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    document.title = "Apothem";
  }

  render() {
    return (
      <div className="App-home">
        <NavBar active="home"/>
      </div>
    )
  }
}

export default Home;