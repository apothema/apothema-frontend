import React from 'react';
import LoginNavBar from "./subviews/LoginNavBar";

function About() {
  return (
    <div>
      <LoginNavBar active="about"/>
      <div className="body">
        <p>
          Apothem, like most sites, uses Cookies<br/>
          By using Apothem, you agree that we use these cookies
        </p>
        <p>
          The Apothem project is led by Tomass Ruža, a 11th grade student from Latvia, Riga, Riga State 1st Gymnasium
        </p>
        <p>
          The frontend (everything you see) was written by one Ivars Tomass Tiltiņš, also from that gymnasium<br/>
          The backend (of which nothing should be seen) has not yet been started
        </p>
      </div>
    </div>
  );
}

export default About;