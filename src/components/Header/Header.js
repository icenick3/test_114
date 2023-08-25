import React from 'react';
import "./Header.css"


const Header = () => {


    return (
        <header>
            <p className="logo">LOGO HERE!</p>
            <div className="menu">
                <p>Main</p>
                <p>About Us</p>
                <p>Features</p>
                <p>Screenshots</p>
                <p>Process</p>
                <p>Contacts</p>
            </div>
        </header>
    );
};

export default Header;