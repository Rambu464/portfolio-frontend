// Feature: portfolio-website-frontend
import { describe, it } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import SkillsSection from '../../components/SkillsSection';
import type { SkillCategory, Skill } from '../../data/types';

const nonBlankString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);

const skillArb: fc.Arbitrary<Skill> = fc.record({
  name: nonBlankString,
  proficiencyLevel: fc.option(nonBlankString, { nil: undefined }),
});

const skillCategoryArb: fc.Arbitrary<SkillCategory> = fc.record({
  category: nonBlankString,
  skills: fc.array(skillArb, { minLength: 1, maxLength: 5 }),
});

describe('Property 5: SkillsSection merender semua skill dengan kategori dan indikator yang benar', () => {
  // Validates: Requirements 4.1, 4.2, 4.3
  it('renders all categories, skill names, and proficiency indicators correctly', () => {
    fc.assert(
      fc.property(
        fc.array(skillCategoryArb, { minLength: 1, maxLength: 4 }),
        (data) => {
          const { container, unmount } = render(<SkillsSection data={data} />);
          const text = container.textContent ?? '';

          const hasAllCategories = data.every((cat) => text.includes(cat.category));
          const hasAllSkills = data.every((cat) =>
            cat.skills.every((skill) => text.includes(skill.name))
          );
          const proficiencyCorrect = data.every((cat) =>
            cat.skills.every((skill) => {
              if (skill.proficiencyLevel !== undefined) {
                return text.includes(skill.proficiencyLevel);
              }
              return true;
            })
          );

          unmount();
          cleanup();
          return hasAllCategories && hasAllSkills && proficiencyCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});
