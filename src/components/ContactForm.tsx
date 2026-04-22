import { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateContactForm } from '../utils/validation';
import type { ContactFormData, FormSubmissionStatus } from '../data/types';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

const emptyForm: ContactFormData = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormSubmissionStatus>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setStatus('submitting');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setFormData(emptyForm);
      setErrors({});
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="alert" className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-700 font-medium text-lg">Pesan berhasil dikirim!</p>
        <p className="text-green-600 mt-1 text-sm">Terima kasih, saya akan segera membalas.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-green-700 underline hover:text-green-900">
          Kirim pesan lain
        </button>
      </div>
    );
  }

  const inputBase = 'w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#547A95] bg-[#E8EDF2] dark:bg-[#2C3947] text-[#2C3947] dark:text-white';

  const inputClass = (field: keyof ContactFormData) =>
    `${inputBase} ${errors[field] ? 'border-red-400' : 'border-[#b0c8d8] dark:border-[#3a4d5e]'}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-[#2C3947] dark:text-[#d1d9e0] mb-1">Nama</label>
        <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange}
          aria-describedby={errors.name ? 'contact-name-error' : undefined} aria-invalid={!!errors.name}
          className={inputClass('name')} placeholder="Nama lengkap" />
        {errors.name && <p id="contact-name-error" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[#2C3947] dark:text-[#d1d9e0] mb-1">Email</label>
        <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange}
          aria-describedby={errors.email ? 'contact-email-error' : undefined} aria-invalid={!!errors.email}
          className={inputClass('email')} placeholder="email@contoh.com" />
        {errors.email && <p id="contact-email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#2C3947] dark:text-[#d1d9e0] mb-1">Pesan</label>
        <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange}
          aria-describedby={errors.message ? 'contact-message-error' : undefined} aria-invalid={!!errors.message}
          className={`${inputClass('message')} resize-none`} placeholder="Tulis pesanmu di sini..." />
        {errors.message && <p id="contact-message-error" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {status === 'error' && <p role="alert" className="text-sm text-red-600">Gagal mengirim pesan. Silakan coba lagi.</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#547A95] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        style={{ backgroundColor: '#547A95' }}
      >
        {status === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
    </form>
  );
}
