import React, { useState, useContext, useEffect, useReducer } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  userType: '',
  login: (data) => {},
  logout: () => {},
});


const initialState = {
  token: localStorage.getItem('token') || '',
  userType: localStorage.getItem('usertype') || '',
  isLoggedIn: !!localStorage.getItem('token'),
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        userType: action.payload.UserType,
        isLoggedIn: true,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: '',
        userType: '',
        isLoggedIn: false,
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
    localStorage.removeItem('token');
    Navigate('/login');
  };

  const loginHandler = (data) => {
    dispatch({ type: 'LOGIN', payload: data });
    localStorage.setItem('token', data.token);
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const contextValue = {
    token: state.token,
    isLoggedIn: state.isLoggedIn,
    userType: state.userType,
    login: loginHandler,
    logout: logoutHandler,
    setError: setError,
    error: state.error,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
