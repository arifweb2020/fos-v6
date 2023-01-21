import React from 'react';
import { Link } from 'react-router-dom';

function LoginNav(props) {
    return (
        <div className='navbar__conatiner'>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">services</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    Login text
                </span>
            </nav>
        </div>
    );
}

export default LoginNav;