import React, { createContext, useReducer } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user)); 
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case 'LOGOUT':
      localStorage.removeItem('user'); 
      return {
        ...state,
        user: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
    Navigate('/login');
  };

  const loginHandler = (user) => {
    dispatch({ type: 'LOGIN', payload: { user } });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const contextValue = {
    user: state.user,
    login: loginHandler,
    logout: logoutHandler,
    setError: setError,
    error: state.error,
    loading:state.loading
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
