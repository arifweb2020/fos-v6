import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar(props) {
    return (
        <div className='navbar__conatiner'>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text
                </span>
            </nav>
        </div>
    );
}

export default Navbar;