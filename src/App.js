import React, { Component } from 'react';
import logo from './icons/icon-primary.svg';
import './SCSS/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Apothem</h1>
                </header>
                <p className="App-intro">
                    Apothem is an electronic register app for school grades, homework and for communication between students
                    and teachers.
                </p>
                <p>
                    Apothem also is available as a mobile app, which does not have to be installed directly on your phone,
                    but is added to the home screen by your browser.
                </p>
            </div>
        );
    }
}

export default App;
