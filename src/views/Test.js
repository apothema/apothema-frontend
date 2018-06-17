import React from 'react';
import {LoginContext} from "./contexts/LoginContext"

function Test() {
  return (
    <LoginContext.Consumer>
      {({isAuthenticated}) => (
        <div>
          Test<br/>
          auth: {isAuthenticated ? "yes" : "no"}
        </div>
      )}
    </LoginContext.Consumer>
  );
}

export default Test;