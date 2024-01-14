import {FaBars, FaTimes} from 'react-icons/fa'
import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
      };

    return (
        <>
            <nav>
                <div className='navbar'>
                    <h2>Next Todo App</h2>
                    <div>
                        <FaBars onClick={toggleNavbar} className="nav-btn" size={30}/>                
                        <div className={`nav-menu ${isNavbarOpen ? 'nav-show' : ''}`}>
                        <div className={`overlay ${isNavbarOpen ? 'visible' : ''}`} onClick={toggleNavbar}></div>
                            <div className='nav-show-header'>
                                <h3>Navigate</h3>
                                <FaTimes className="close-nav" onClick={toggleNavbar} size={20}/>
                            </div>
                            <hr />
                            <ul>
                                <li>{<Link to="/" onClick={toggleNavbar} className="nav-link">Home</Link>}</li>
                                <li>{<Link to="/create" onClick={toggleNavbar} className="nav-link">New</Link>}</li>
                                <li>{<Link to="/completed" onClick={toggleNavbar} className="nav-link">Completed</Link>}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </nav>
        </>

        
    );
}
 
export default Navbar;