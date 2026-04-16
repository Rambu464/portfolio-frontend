import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from '../../components/HeroSection';
import type { HeroData } from '../../data/types';

const baseData: HeroData = {
  fullName: 'Jane Doe',
  tagline: 'Frontend Developer',
  ctaLabel: 'See Projects',
  ctaTarget: 'projects',
};

describe('HeroSection', () => {
  it('renders full name', () => {
    render(<HeroSection data={baseData} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(<HeroSection data={baseData} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('renders CTA button with correct label', () => {
    render(<HeroSection data={baseData} />);
    expect(screen.getByRole('link', { name: 'See Projects' })).toBeInTheDocument();
  });

  it('does not render profile image when profileImageUrl is absent', () => {
    render(<HeroSection data={baseData} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders profile image when profileImageUrl is provided', () => {
    const data: HeroData = { ...baseData, profileImageUrl: 'https://example.com/photo.jpg' };
    render(<HeroSection data={data} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt');
    expect((img as HTMLImageElement).alt).not.toBe('');
  });
});
