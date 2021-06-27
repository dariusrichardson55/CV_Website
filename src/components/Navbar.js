import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        CV Website<i className="fas fa-file" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times ' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onclick={closeMobileMenu}>
                                About Me
                 </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education" className="nav-links" onclick={closeMobileMenu}>
                                Education
                 </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/technical-skills" className="nav-links" onclick={closeMobileMenu}>
                                Technical Skills
                 </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/work-experience" className="nav-links" onclick={closeMobileMenu}>
                                Work Experience
                 </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Email</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
