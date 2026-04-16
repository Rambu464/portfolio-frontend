import { describe, it, expect } from 'vitest';
import { validateContactForm, isValidEmail } from '../../utils/validation';

describe('isValidEmail', () => {
  it('returns true for valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('returns true for email with subdomain', () => {
    expect(isValidEmail('user@mail.example.com')).toBe(true);
  });

  it('returns false for email without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  it('returns false for email without domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('returns false for email with spaces', () => {
    expect(isValidEmail('user @example.com')).toBe(false);
  });
});

describe('validateContactForm', () => {
  it('returns isValid true for valid data', () => {
    const result = validateContactForm({ name: 'Alice', email: 'alice@example.com', message: 'Hello' });
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('returns error when name is empty', () => {
    const result = validateContactForm({ name: '', email: 'alice@example.com', message: 'Hello' });
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it('returns error when name is only whitespace', () => {
    const result = validateContactForm({ name: '   ', email: 'alice@example.com', message: 'Hello' });
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it('returns error when email is empty', () => {
    const result = validateContactForm({ name: 'Alice', email: '', message: 'Hello' });
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it('returns error when email format is invalid', () => {
    const result = validateContactForm({ name: 'Alice', email: 'not-an-email', message: 'Hello' });
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it('returns error when message is empty', () => {
    const result = validateContactForm({ name: 'Alice', email: 'alice@example.com', message: '' });
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it('returns error when message is only whitespace', () => {
    const result = validateContactForm({ name: 'Alice', email: 'alice@example.com', message: '   ' });
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });
});
