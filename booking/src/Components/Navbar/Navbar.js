import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <nav className='navbar'>
                <div className="container">
                    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                        <span className="logo">Booking Adviser</span>  </Link>
                    {user ? user.username : (
                        <div className="Navitem">
                            <Link to="/register">
                                <button className="navbtn">Ragister</button>

                            </Link>
                            <Link to="/login">
                                <button className="navbtn">Login</button>
                            </Link>
                        </div>
                    )}
                </div>

            </nav>
        </>)
}

export default Navbar