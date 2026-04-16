// Feature: portfolio-website-frontend
import { describe, it } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import AboutSection from '../../components/AboutSection';
import type { AboutData, EducationItem, ExperienceItem } from '../../data/types';

const nonBlankString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);

const educationItemArb: fc.Arbitrary<EducationItem> = fc.record({
  institution: nonBlankString,
  degree: nonBlankString,
  year: nonBlankString,
});

const experienceItemArb: fc.Arbitrary<ExperienceItem> = fc.record({
  company: nonBlankString,
  role: nonBlankString,
  period: nonBlankString,
  description: nonBlankString,
});

const aboutDataArb: fc.Arbitrary<AboutData> = fc.record({
  description: nonBlankString,
  education: fc.array(educationItemArb, { minLength: 1, maxLength: 3 }),
  experience: fc.array(experienceItemArb, { minLength: 1, maxLength: 3 }),
});

describe('Property 3: AboutSection merender semua data yang diberikan', () => {
  // Validates: Requirements 3.1, 3.2
  it('renders description and all education/experience items', () => {
    fc.assert(
      fc.property(aboutDataArb, (data) => {
        const { container, unmount } = render(<AboutSection data={data} />);
        const text = container.textContent ?? '';
        const hasDescription = text.includes(data.description);
        const hasAllEducation = data.education.every((e) => text.includes(e.institution));
        const hasAllExperience = data.experience.every((e) => text.includes(e.company));
        unmount();
        cleanup();
        return hasDescription && hasAllEducation && hasAllExperience;
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 4: Conditional rendering tombol CV di AboutSection', () => {
  // Validates: Requirements 3.3
  it('renders CV button only when cvUrl is provided', () => {
    fc.assert(
      fc.property(
        aboutDataArb,
        fc.option(fc.webUrl(), { nil: undefined }),
        (data, cvUrl) => {
          const fullData: AboutData = { ...data, cvUrl };
          const { container, unmount } = render(<AboutSection data={fullData} />);
          // Check specifically for the Download CV link
          const links = Array.from(container.querySelectorAll('a'));
          const cvButton = links.find((a) => a.textContent?.toLowerCase().includes('download cv'));
          const result = cvUrl ? cvButton !== undefined : cvButton === undefined;
          unmount();
          cleanup();
          return result;
        }
      ),
      { numRuns: 100 }
    );
  });
});
