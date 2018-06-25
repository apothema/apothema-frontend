import React from "react";

export const LoginContext = React.createContext({
  isAuthenticated: false,
  authenticate: () => {},
  signOut: () => {}
});