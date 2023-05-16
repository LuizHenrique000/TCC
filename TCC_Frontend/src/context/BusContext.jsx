import React, { useContext, useState } from "react";
import { createContext } from "react";

export const BusContext = createContext();

export const BusStorage = ({ children }) => {
  const [bus, setBus] = useState('');
  return (
    <BusContext.Provider value={{ bus, setBus }}>
      {children}
    </BusContext.Provider>
  );
};

export function useBusContext() {
  const context = useContext(BusContext);
  return context;
}