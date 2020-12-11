import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <h1 style={{color: "white"}}>Show your name</h1>
                <ul className="headerList">
                    <li><Link to="/users/home">Home</Link></li>
                    <li><Link to="/users/form">Create an user</Link></li>
                </ul>
            </header>
            {children}
        </>
    );
}

export default Layout;