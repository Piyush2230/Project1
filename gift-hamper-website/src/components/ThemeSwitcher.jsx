import React, { useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.className = newTheme; // Apply the theme to the root element
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 bg-blue-500 text-white rounded-md"
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeSwitcher;