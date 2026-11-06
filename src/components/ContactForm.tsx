import { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateContactForm } from '../utils/validation';
import type { ContactFormData, FormSubmissionStatus } from '../data/types';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'rambu.ilalang@gmail.com';

const emptyForm: ContactFormData = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormSubmissionStatus>('idle');
  const [sentViaMailto, setSentViaMailto] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function openMailtoClient(data: ContactFormData) {
    const subject = encodeURIComponent(`Portfolio Message from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    const hasEmailJsConfig = Boolean(
      EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
    );

    if (!hasEmailJsConfig) {
      openMailtoClient(formData);
      setSentViaMailto(true);
      setStatus('success');
      setFormData(emptyForm);
      setErrors({});
      return;
    }

    setStatus('submitting');
    setSentViaMailto(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData(emptyForm);
      setErrors({});
    } catch (err) {
      console.error('[ContactForm] EmailJS error:', err);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="alert" className="rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-6 text-center">
        <p className="text-green-700 dark:text-green-300 font-medium text-lg">Message prepared!</p>
        <p className="text-green-600 dark:text-green-400 mt-1 text-sm">
          {sentViaMailto
            ? `Your email app has been opened to send to ${CONTACT_EMAIL}. Thank you!`
            : 'Thank you, your message has been sent and I will reply soon.'}
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setSentViaMailto(false);
          }}
          className="mt-4 text-sm text-green-700 dark:text-green-300 underline hover:text-green-900"
        >
          Send another message
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
        <label htmlFor="contact-name" className="block text-sm font-medium text-[#2C3947] dark:text-[#d1d9e0] mb-1">Name</label>
        <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange}
          aria-describedby={errors.name ? 'contact-name-error' : undefined} aria-invalid={!!errors.name}
          className={inputClass('name')} placeholder="Full name" />
        {errors.name && <p id="contact-name-error" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[#2C3947] dark:text-[#d1d9e0] mb-1">Email</label>
        <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange}
          aria-describedby={errors.email ? 'contact-email-error' : undefined} aria-invalid={!!errors.email}
          className={inputClass('email')} placeholder="email@example.com" />
        {errors.email && <p id="contact-email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#2C3947] dark:text-[#d1d9e0] mb-1">Message</label>
        <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange}
          aria-describedby={errors.message ? 'contact-message-error' : undefined} aria-invalid={!!errors.message}
          className={`${inputClass('message')} resize-none`} placeholder="Write your message here..." />
        {errors.message && <p id="contact-message-error" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div role="alert" className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-3 text-sm text-red-700 dark:text-red-300">
          <p className="font-medium">Failed to send automatically.</p>
          <button
            type="button"
            onClick={() => openMailtoClient(formData)}
            className="mt-1 text-xs underline font-semibold text-[#547A95] dark:text-[#8cb3d1] hover:opacity-80"
          >
            Send manually via Email Client ({CONTACT_EMAIL}) →
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#547A95] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        style={{ backgroundColor: '#547A95' }}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
