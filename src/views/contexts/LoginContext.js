import React from "react";

export const LoginContext = React.createContext({
  isAuthenticated: false,
  authenticate(cb) {
    console.log("auth-ing...");
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
});