import type { AboutData } from '../data/types';

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const { description, education, experience, cvUrl } = data;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12 text-center md:text-left">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-indigo-100 pb-2">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">{item.institution}</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{item.degree}</span>
                  <span className="text-indigo-500 text-sm">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-indigo-100 pb-2">
              Experience
            </h3>
            <ul className="space-y-6">
              {experience.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">{item.company}</span>
                  <span className="text-gray-700 dark:text-gray-400 text-sm">{item.role}</span>
                  <span className="text-indigo-500 text-sm">{item.period}</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CV Download Button (conditional) */}
        {cvUrl && (
          <div className="mt-10 text-center md:text-left">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
