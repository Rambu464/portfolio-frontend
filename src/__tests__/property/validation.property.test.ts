// Feature: portfolio-website-frontend
import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { validateContactForm, isValidEmail } from '../../utils/validation';

// Arbitrary for non-empty, non-whitespace strings
const nonBlankString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);

// Arbitrary for valid email strings
const validEmail = fc
  .tuple(
    fc.stringMatching(/^[a-zA-Z0-9]+$/),
    fc.stringMatching(/^[a-zA-Z0-9]+$/),
    fc.stringMatching(/^[a-zA-Z]{2,4}$/)
  )
  .map(([local, domain, tld]) => `${local}@${domain}.${tld}`);

describe('Property 8: Validasi form menerima data yang valid', () => {
  // Validates: Requirements 6.2
  it('validateContactForm returns isValid true for valid data', () => {
    fc.assert(
      fc.property(nonBlankString, validEmail, nonBlankString, (name, email, message) => {
        const result = validateContactForm({ name, email, message });
        return result.isValid === true && Object.keys(result.errors).length === 0;
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 9: Validasi form menolak field kosong atau whitespace', () => {
  // Validates: Requirements 6.3
  it('validateContactForm returns isValid false when name is blank', () => {
    fc.assert(
      fc.property(
        fc.string().map((s) => s.replace(/\S/g, ' ')), // whitespace-only
        validEmail,
        nonBlankString,
        (name, email, message) => {
          const result = validateContactForm({ name, email, message });
          return result.isValid === false && result.errors.name !== undefined;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('validateContactForm returns isValid false when message is blank', () => {
    fc.assert(
      fc.property(
        nonBlankString,
        validEmail,
        fc.string().map((s) => s.replace(/\S/g, ' ')), // whitespace-only
        (name, email, message) => {
          const result = validateContactForm({ name, email, message });
          return result.isValid === false && result.errors.message !== undefined;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('validateContactForm returns isValid false when email is empty', () => {
    fc.assert(
      fc.property(nonBlankString, nonBlankString, (name, message) => {
        const result = validateContactForm({ name, email: '', message });
        return result.isValid === false && result.errors.email !== undefined;
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 10: isValidEmail menolak format email yang tidak valid', () => {
  // Validates: Requirements 6.4
  it('isValidEmail returns false for strings without @ symbol', () => {
    fc.assert(
      fc.property(
        fc.string().filter((s) => !s.includes('@')),
        (s) => {
          return isValidEmail(s) === false;
        }
      ),
      { numRuns: 100 }
    );
  });
});
