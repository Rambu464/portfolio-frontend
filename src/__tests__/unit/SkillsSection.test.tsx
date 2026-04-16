import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillsSection from '../../components/SkillsSection';
import type { SkillCategory } from '../../data/types';

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', proficiencyLevel: 'Advanced' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'Backend',
    skills: [{ name: 'Node.js' }],
  },
];

describe('SkillsSection', () => {
  it('renders all category names', () => {
    render(<SkillsSection data={skillsData} />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('renders all skill names', () => {
    render(<SkillsSection data={skillsData} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders proficiency indicator when proficiencyLevel is provided', () => {
    render(<SkillsSection data={skillsData} />);
    expect(screen.getByText('Advanced')).toBeInTheDocument();
  });

  it('does not render proficiency indicator when proficiencyLevel is absent', () => {
    render(<SkillsSection data={skillsData} />);
    // CSS skill has no proficiencyLevel — only 'Advanced' should appear as indicator
    const indicators = screen.getAllByText('Advanced');
    expect(indicators).toHaveLength(1);
  });
});
