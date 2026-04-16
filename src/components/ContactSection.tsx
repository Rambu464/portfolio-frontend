import type { ContactData } from '../data/types';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

interface ContactSectionProps {
  data: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          Hubungi Saya
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-10">
          Ada pertanyaan atau tawaran kerja sama? Kirim pesan atau temukan saya di media sosial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Kirim Pesan</h3>
            <ContactForm />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Temukan Saya Di</h3>
            <SocialLinks links={data.socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
