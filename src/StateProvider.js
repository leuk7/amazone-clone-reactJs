import React, { createContext, useContext, useReducer } from "react";

// Prepares the datalayer
export const StateContext = createContext();

// Wrap our app and provide the datalayer
export const StateProvider = ({ reducer, initialSate, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialSate)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the datalayer
export const useStateValue = () => useContext(StateContext);
