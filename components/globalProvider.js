import React, { createContext, useState } from 'react';

// Crear el contexto
export const GlobalContext = createContext();

// Proveedor de estado global
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    submitButton: false,
    dataFormGlobal: {},
    flightDetails: {},
    favorite: '',
  });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
