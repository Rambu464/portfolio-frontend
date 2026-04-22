import type { AboutData } from '../data/types';

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const { description, education, experience, cvUrl } = data;

  return (
    <section id="about" className="py-20 px-4 bg-[#E8EDF2] dark:bg-[#2C3947]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3947] dark:text-white mb-8 text-center">
          About Me
        </h2>

        <p className="text-[#4a5e6e] dark:text-[#d1d9e0] text-lg leading-relaxed mb-12 text-center md:text-left">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-[#2C3947] dark:text-white mb-4 border-b border-[#547A95] pb-2">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium text-[#2C3947] dark:text-white">{item.institution}</span>
                  <span className="text-[#4a5e6e] dark:text-[#d1d9e0] text-sm">{item.degree}</span>
                  <span className="text-[#547A95] dark:text-[#C2A56D] text-sm">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold text-[#2C3947] dark:text-white mb-4 border-b border-[#547A95] pb-2">
              Experience
            </h3>
            <ul className="space-y-6">
              {experience.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium text-[#2C3947] dark:text-white">{item.company}</span>
                  <span className="text-[#4a5e6e] dark:text-[#d1d9e0] text-sm">{item.role}</span>
                  <span className="text-[#547A95] dark:text-[#C2A56D] text-sm">{item.period}</span>
                  <p className="text-[#4a5e6e] dark:text-[#d1d9e0] text-sm mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {cvUrl && (
          <div className="mt-10 text-center md:text-left">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#547A95] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3d6278] focus:outline-none focus:ring-2 focus:ring-[#547A95] focus:ring-offset-2 transition-colors"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
