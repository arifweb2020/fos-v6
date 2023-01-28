import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
       
        if(search.trim().length === 0) {
            setSearch("")
            alert("enter products") 
            return
        } 
        navigate(`/search/${search.trim()}`);
        setSearch("")
    }

    return (
        <div className='navbar__conatiner'>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark main__nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stable">Table</Link>
                    </li>
                  
                </ul>
                <span className="navbar-text">

                    <form onSubmit={formHandler}>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for products ..." />
                    </form>
                </span>
            </nav>
        </div>
    );
}

export default Navbar;