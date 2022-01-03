import React, { createContext, useReducer, useContext } from "react";
import reducer from "./Reducer";

const StoreContext = createContext(null);
// Initial state
const INITIAL_STATE = {
  searchTerm: "",
};

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}

const useStore = () => useContext(StoreContext);
const useSelector = () => {
  return useContext(StoreContext)[0];
};
const useDispatch = () => {
  return useContext(StoreContext)[1];
};

export { useStore, useSelector, useDispatch, Store };
