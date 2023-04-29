import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    userType: '',
    login: (data) => { },
    logout: () => { }
})


export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('token');
    const intialUserType = localStorage.getItem('usertype');
    const [token, setToken] = useState(initialToken)
    const [_UserType, setUserType] = useState(intialUserType)
    const userIsLoggedIn = !!token;



    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        Navigate('/login')
    }

    const loginHandler = (data) => {
        setToken(data.token)
        setUserType(data.UserType)

        localStorage.setItem("usertype", data.UserType)
        localStorage.setItem('token', data.token) //this is an api provided by javascript/browser
        //const remainingTime = calculateRemainingTime(expirationTime);
        //setTimeout(logoutHandler, remainingTime);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        userType: _UserType,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export const UserTypes = {
    NasscomUSER: "NasscomUSER",
  
}

