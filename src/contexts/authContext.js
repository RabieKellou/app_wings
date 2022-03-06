import { createContext } from "react";

// Create a new auth context and define
// what it will contain.
export const AuthContext = createContext({
  auth: null,
  setAuth: (value) => {},
});
