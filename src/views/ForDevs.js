import React from 'react';
import LoginNavBar from "./subviews/LoginNavBar";

function ForDevs() {
  return (
    <div>
      <LoginNavBar active="devs"/>
      <div className="body">
        <p>
          Apothem will supposedly have a public API (who knows when that'll get started)
        </p>
      </div>
    </div>
  );
}

export default ForDevs;