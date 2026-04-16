// Feature: portfolio-website-frontend
import { describe, it } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import HeroSection from '../../components/HeroSection';
import type { HeroData } from '../../data/types';

const nonBlankString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);

const heroDataArb = fc.record<HeroData>({
  fullName: nonBlankString,
  tagline: nonBlankString,
  ctaLabel: nonBlankString,
  ctaTarget: fc.constantFrom('projects' as const, 'contact' as const),
});

describe('Property 1: HeroSection merender semua data yang diberikan', () => {
  // Validates: Requirements 2.1, 2.2, 2.3
  it('renders fullName, tagline, and ctaLabel for any valid HeroData', () => {
    fc.assert(
      fc.property(heroDataArb, (data) => {
        const { container, unmount } = render(<HeroSection data={data} />);
        const text = container.textContent ?? '';
        const result =
          text.includes(data.fullName) &&
          text.includes(data.tagline) &&
          text.includes(data.ctaLabel);
        unmount();
        cleanup();
        return result;
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 2: Conditional rendering foto profil di HeroSection', () => {
  // Validates: Requirements 2.5
  it('renders profile image only when profileImageUrl is provided', () => {
    fc.assert(
      fc.property(
        heroDataArb,
        fc.option(fc.webUrl(), { nil: undefined }),
        (data, profileImageUrl) => {
          const fullData: HeroData = { ...data, profileImageUrl };
          const { container, unmount } = render(<HeroSection data={fullData} />);
          const img = container.querySelector('img');
          const result = profileImageUrl ? img !== null : img === null;
          unmount();
          cleanup();
          return result;
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 12: Semua elemen gambar memiliki atribut alt yang tidak kosong', () => {
  // Validates: Requirements 8.2
  it('profile image has non-empty alt attribute', () => {
    fc.assert(
      fc.property(heroDataArb, fc.webUrl(), (data, profileImageUrl) => {
        const fullData: HeroData = { ...data, profileImageUrl };
        const { container, unmount } = render(<HeroSection data={fullData} />);
        const img = container.querySelector('img') as HTMLImageElement | null;
        const result = img !== null && img.alt !== '';
        unmount();
        cleanup();
        return result;
      }),
      { numRuns: 100 }
    );
  });
});
