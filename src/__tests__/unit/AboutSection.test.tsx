import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutSection from '../../components/AboutSection';
import type { AboutData } from '../../data/types';

const baseData: AboutData = {
  description: 'A passionate developer.',
  education: [
    { institution: 'State University', degree: 'B.Sc Computer Science', year: '2020-2024' },
  ],
  experience: [
    { company: 'Tech Corp', role: 'Intern', period: '2023', description: 'Worked on web apps.' },
  ],
};

describe('AboutSection', () => {
  it('renders description', () => {
    render(<AboutSection data={baseData} />);
    expect(screen.getByText('A passionate developer.')).toBeInTheDocument();
  });

  it('renders education items', () => {
    render(<AboutSection data={baseData} />);
    expect(screen.getByText('State University')).toBeInTheDocument();
    expect(screen.getByText('B.Sc Computer Science')).toBeInTheDocument();
  });

  it('renders experience items', () => {
    render(<AboutSection data={baseData} />);
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
    expect(screen.getByText('Intern')).toBeInTheDocument();
  });

  it('does not render CV button when cvUrl is absent', () => {
    render(<AboutSection data={baseData} />);
    expect(screen.queryByRole('link', { name: /download cv/i })).not.toBeInTheDocument();
  });

  it('renders CV button when cvUrl is provided', () => {
    const data: AboutData = { ...baseData, cvUrl: 'https://example.com/cv.pdf' };
    render(<AboutSection data={data} />);
    const link = screen.getByRole('link', { name: /download cv/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_blank');
  });
});
