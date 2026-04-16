import type { HeroData } from '../data/types';

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { fullName, tagline, ctaLabel, ctaTarget, profileImageUrl } = data;

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(ctaTarget);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 py-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {fullName}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            {tagline}
          </p>
          <a
            href={`#${ctaTarget}`}
            onClick={handleCtaClick}
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Profile image (conditional) */}
        {profileImageUrl && (
          <div className="flex-shrink-0">
            <img
              src={profileImageUrl}
              alt={`Foto profil ${fullName}`}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
        )}
      </div>
    </section>
  );
}
