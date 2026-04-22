import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import useActiveSection from '../hooks/useActiveSection';
import DarkModeToggle from './DarkModeToggle';
import { heroData } from '../data/portfolio';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact'];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useTheme();
  const activeSection = useActiveSection({ sectionIds: SECTION_IDS });

  const handleLinkClick = () => setMenuOpen(false);

  const getLinkClass = (href: string) => {
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId;
    if (isActive) {
      return isDark
        ? 'text-sm font-semibold transition-all px-3 py-1.5 rounded-full bg-[#3a4d5e] text-[#C2A56D]'
        : 'text-sm font-semibold transition-all px-3 py-1.5 rounded-full bg-[#dce6ef] text-[#547A95]';
    }
    return isDark
      ? 'text-sm font-medium transition-all px-3 py-1.5 rounded-full text-[#d1d9e0] hover:text-white hover:bg-[#3a4d5e]'
      : 'text-sm font-medium transition-all px-3 py-1.5 rounded-full text-[#4a5e6e] hover:text-[#547A95] hover:bg-[#dce6ef]';
  };

  const getMobileLinkClass = (href: string) => {
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId;
    if (isActive) {
      return isDark
        ? 'block text-sm font-semibold px-4 py-2 rounded-xl transition-all bg-[#3a4d5e] text-[#C2A56D]'
        : 'block text-sm font-semibold px-4 py-2 rounded-xl transition-all bg-[#dce6ef] text-[#547A95]';
    }
    return isDark
      ? 'block text-sm font-medium px-4 py-2 rounded-xl transition-all text-[#d1d9e0] hover:bg-[#3a4d5e]'
      : 'block text-sm font-medium px-4 py-2 rounded-xl transition-all text-[#4a5e6e] hover:bg-[#dce6ef]';
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4">
      <nav
        style={{
          backgroundColor: isDark ? 'rgba(44,57,71,0.85)' : 'rgba(255,255,255,0.88)',
          borderColor: isDark ? '#3a4d5e' : '#c8d8e8',
        }}
        className="w-full max-w-3xl rounded-2xl px-4 py-2.5 flex items-center justify-between shadow-xl backdrop-blur-md border transition-all"
        aria-label="Main navigation"
      >
        {/* Left: Name */}
        <a href="#hero" className="flex items-center group" onClick={handleLinkClick}>
          <span
            className="text-sm font-semibold transition-colors"
            style={{ color: isDark ? '#ffffff' : '#2C3947' }}
          >
            {heroData.fullName}
          </span>
        </a>

        {/* Center: Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={getLinkClass(href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: DarkModeToggle + Hamburger */}
        <div className="flex items-center gap-1">
          <DarkModeToggle />
          <button
            className="md:hidden p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#547A95] transition-colors"
            style={{ color: isDark ? '#e8edf2' : '#2C3947' }}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          style={{
            backgroundColor: isDark ? 'rgba(44,57,71,0.95)' : 'rgba(255,255,255,0.95)',
            borderColor: isDark ? '#3a4d5e' : '#c8d8e8',
          }}
          className="md:hidden mt-2 w-full max-w-3xl rounded-2xl px-3 py-3 flex flex-col gap-1 shadow-xl backdrop-blur-md border"
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={getMobileLinkClass(href)} onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
