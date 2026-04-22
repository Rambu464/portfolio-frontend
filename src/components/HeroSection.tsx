import { useTheme } from '../context/ThemeContext';
import type { HeroData } from '../data/types';

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { fullName, tagline, ctaTarget, profileImageUrl } = data;
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 pt-24 pb-16 ${isDark ? 'aurora-dark' : 'aurora-light'}`}
    >
      <div className="flex flex-col items-center gap-8 text-center max-w-xl w-full">

        {/* Profile photo with two side badges */}
        <div className="relative flex items-center justify-center w-full">
          {/* Left badge: AI Engineer */}
          <span
            className="absolute left-0 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border"
            style={isDark
              ? { backgroundColor: '#2C3947', color: '#C2A56D', borderColor: '#8a7040' }
              : { backgroundColor: '#ffffff', color: '#547A95', borderColor: '#b0c8d8' }
            }
          >
            AI Engineer
          </span>

          {/* Profile circle */}
          <div className="relative w-44 h-44">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ backgroundColor: '#547A95' }}
            />
            <div
              className="relative w-full h-full rounded-full overflow-hidden border-4"
              style={{ borderColor: isDark ? '#547A95' : '#7a9db5' }}
            >
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt={`Foto profil ${fullName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-5xl font-bold"
                  style={isDark
                    ? { backgroundColor: '#2C3947', color: '#547A95' }
                    : { backgroundColor: '#E8EDF2', color: '#547A95' }
                  }
                >
                  {fullName.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Right badge: MLOps */}
          <span
            className="absolute right-0 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border"
            style={isDark
              ? { backgroundColor: '#2C3947', color: '#C2A56D', borderColor: '#8a7040' }
              : { backgroundColor: '#ffffff', color: '#547A95', borderColor: '#b0c8d8' }
            }
          >
            MLOps
          </span>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ color: isDark ? '#ffffff' : '#2C3947' }}
          >
            Hi, I'm <br />
            <span style={{ color: '#547A95' }}>{fullName}</span>
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: isDark ? '#d1d9e0' : '#4a5e6e' }}
          >
            {tagline}
          </p>
        </div>

        {/* CTA */}
        <a
          href={`#${ctaTarget}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(ctaTarget)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block font-semibold px-7 py-3 rounded-full border-2 transition-all"
          style={{
            borderColor: '#547A95',
            color: isDark ? '#ffffff' : '#547A95',
            backgroundColor: isDark ? '#547A95' : 'transparent',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = isDark ? '#3d6278' : '#dce6ef';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = isDark ? '#547A95' : 'transparent';
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
