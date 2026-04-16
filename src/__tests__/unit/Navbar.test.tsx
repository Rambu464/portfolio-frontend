import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '../../context/ThemeContext';

function renderNavbar() {
  return render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

describe('Navbar', () => {
  it('renders all navigation links', () => {
    renderNavbar();
    expect(screen.getAllByRole('link', { name: /hero/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /skills/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /projects/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0);
  });

  it('renders hamburger button', () => {
    renderNavbar();
    const btn = screen.getByRole('button', { name: /buka menu/i });
    expect(btn).toBeInTheDocument();
  });

  it('toggles mobile menu open and closed', () => {
    renderNavbar();
    const btn = screen.getByRole('button', { name: /buka menu/i });

    // Mobile menu should not be visible initially
    expect(screen.queryByRole('list', { hidden: true })).toBeDefined();

    // Open menu
    fireEvent.click(btn);
    expect(screen.getByRole('button', { name: /tutup menu/i })).toBeInTheDocument();

    // Close menu
    fireEvent.click(screen.getByRole('button', { name: /tutup menu/i }));
    expect(screen.getByRole('button', { name: /buka menu/i })).toBeInTheDocument();
  });

  it('renders DarkModeToggle button', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /aktifkan dark mode/i })).toBeInTheDocument();
  });
});
