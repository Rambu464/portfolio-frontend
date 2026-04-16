import type { ContactFormData } from '../data/types';

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) {
    errors.name = 'Nama wajib diisi.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email wajib diisi.';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Format email tidak valid.';
  }

  if (!data.message.trim()) {
    errors.message = 'Pesan wajib diisi.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
