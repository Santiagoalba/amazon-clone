import React, { createContext, useContext, useReducer } from "react";

// Prepara la dataLayer
export const StateContext = createContext();

// Encierra la app y la provee con la dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Exportamos la informacion de la dataLayer
export const useStateValue = () => useContext(StateContext);
