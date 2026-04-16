import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import useActiveSection from '../hooks/useActiveSection';
import DarkModeToggle from './DarkModeToggle';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact'];

const navLinks = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useTheme(); // ensures component re-renders when theme changes
  const activeSection = useActiveSection({ sectionIds: SECTION_IDS });

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const getLinkClass = (href: string, mobile = false) => {
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId;
    const base = 'font-medium transition-colors';
    if (mobile) {
      return [
        base,
        'block py-1',
        isActive
          ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded'
          : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400',
      ].join(' ');
    }
    return [
      base,
      isActive
        ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
        : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400',
    ].join(' ');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
      <nav
        className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-lg font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          onClick={handleLinkClick}
        >
          Rambu Ilalang
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={getLinkClass(href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: DarkModeToggle + Hamburger button */}
        <div className="flex items-center gap-2">
          <DarkModeToggle />

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              /* X icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900 dark:text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900 dark:text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 px-4 py-3 flex flex-col gap-3"
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={getLinkClass(href, true)}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
