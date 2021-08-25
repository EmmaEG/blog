import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
// here we'll be create initial state
// {Object} && [Array]

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispacth] = useReducer(Reducer, INITIAL_STATE);

  // to save user state in local
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispacth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// we will use contextProviders in index.js so that the whole application can access the state
