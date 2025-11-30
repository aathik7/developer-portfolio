import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, Icons } from '../constants';
import { useTheme } from '../hooks/useTheme';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-6 sticky top-0 bg-background-primary-light dark:bg-background-primary-dark z-50">
      <NavLink to="/" className="flex items-center gap-4 text-text-primary-light dark:text-text-primary-dark">
        {theme === 'light' 
        ? <img src="/assets/images/aathi_light.svg" alt="Logo" className="h-10 w-25" /> 
        : <img src="/assets/images/aathi_dark.svg" alt="Logo" className="h-10 w-25" />}
      </NavLink>
      <div className="hidden sm:flex flex-1 justify-end items-center gap-8">
        <nav className="flex items-center gap-9 text-text-primary-light dark:text-text-primary-dark">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => 
                `text-sm font-medium leading-normal hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-text-primary-light dark:text-text-primary-dark'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-text-primary-light dark:text-text-primary-dark hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Icons.moon className="h-5 w-5" /> : <Icons.sun className="h-5 w-5" />}
        </button>
      </div>
      <div className="sm:hidden flex items-center gap-2 text-text-primary-light dark:text-text-primary-dark">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Icons.moon className="h-5 w-5" /> : <Icons.sun className="h-5 w-5" />}
        </button>
        <button className="p-2 rounded-lg hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">menu</span>}
        </button>
      </div>
      {isOpen && (
         <div className="absolute top-full left-0 w-full bg-background-primary-light dark:bg-background-primary-dark sm:hidden shadow-lg border-t border-border-color-light dark:border-border-color-dark">
          <div className="flex flex-col gap-4 p-4">
            {NAV_LINKS.map(link => (
                <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-text-primary-light dark:text-text-primary-dark hover:text-primary px-2 py-1"
                >
                    {link.label}
                </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;