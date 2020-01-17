import React, {useState} from 'react';
import useDarkMode from './useDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className='navbar'>
            <h1>Women's Wold Cup Players </h1>
            <div className='dark-mode__toggle'>
                <button
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default NavBar;
