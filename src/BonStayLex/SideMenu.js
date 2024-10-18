import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <button className="menu-button" onClick={toggleMenu}>
                <span className="material-icons">menu</span>
            </button>
            <nav className="menu-items">
                <Link to="/" className="menu-item">Home</Link>
                <Link to="/about" className="menu-item">About</Link>
                <Link to="/contact" className="menu-item">Contact</Link>
                {/* Add more menu items as needed */}
            </nav>
        </div>
    );
};

export default SideMenu;
