

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark');
    };
  
    return (
        <nav className={`flex items-center justify-between flex-wrap p-6 ${darkMode ? 'bg-gray-900' : 'bg-black'}`}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="block lg:hidden">
        <button className={`flex items-center px-3 py-2 border rounded text-white border-white ${darkMode ? 'border-gray-600' : 'border-gray-900'} hover:text-white hover:border-white`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        <Link to="/friends" className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 ${darkMode ? 'text-gray-200' : 'text-black'}`}>Friend</Link>
          <Link to="/" className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 ${darkMode ? 'text-gray-200' : 'text-black'}`}>Home</Link>
          <Link to="/about" className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 ${darkMode ? 'text-gray-200' : 'text-black'}`}>About</Link>
          <Link to="/contact" className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ${darkMode ? 'text-gray-200' : 'text-black'}`}>Contact</Link>
          <Link to="/posts" className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ${darkMode ? 'text-gray-200' : 'text-black'}`}>Posts</Link>
        </div>
        <div>
          <button className={`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white ${darkMode ? 'border-gray-600' : 'border-gray-900'} hover:border-transparent hover:text-white hover:bg-white mt-4 lg:mt-0`}
            onClick={toggleDarkMode}
          >
                   {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
    );
};

export default Header;