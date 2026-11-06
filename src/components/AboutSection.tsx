import type { AboutData } from '../data/types';

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const { description, education, experience } = data;

  return (
    <section id="about" className="py-20 px-4 bg-[#E8EDF2] dark:bg-[#2C3947]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3947] dark:text-white mb-8 text-center">
          About Me
        </h2>

        <p className="text-[#4a5e6e] dark:text-[#d1d9e0] text-lg leading-relaxed mb-14 text-center">
          {description}
        </p>

        <div className="flex flex-col gap-16">
          {/* Relevant Experience (Above) */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#2C3947] dark:text-white mb-8 border-b-2 border-[#547A95] dark:border-white pb-2 text-center">
              Relevant Experience
            </h3>

            <div className="w-full max-w-2xl flex flex-col items-center">
              {experience.map((item, index) => (
                <div key={index} className="w-full flex flex-col items-center">
                  {/* Experience Card */}
                  <div className="w-full bg-white dark:bg-[#1e2d3d] rounded-xl p-6 shadow-sm border border-[#b0c8d8] dark:border-[#3a4d5e] text-center">
                    <span className="block text-lg font-semibold text-[#2C3947] dark:text-white">
                      {item.company}
                    </span>
                    <span className="block text-[#4a5e6e] dark:text-[#d1d9e0] text-sm font-medium mt-0.5">
                      {item.role}
                    </span>
                    <span className="inline-block text-[#547A95] dark:text-white text-xs font-semibold mt-1 px-3 py-0.5 rounded-full bg-[#E8EDF2] dark:bg-[#2C3947]">
                      {item.period}
                    </span>
                    <p className="text-[#4a5e6e] dark:text-[#d1d9e0] text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Center roadmap connector between connected items */}
                  {index < experience.length - 1 && (
                    <div aria-hidden="true" className="flex flex-col items-center">
                      <div className="w-0.5 h-5 bg-[#547A95] dark:bg-white" />
                      <div className="w-3 h-3 rounded-full bg-[#547A95] dark:bg-white ring-4 ring-[#dce6ef] dark:ring-[#3a4d5e]" />
                      <div className="w-0.5 h-5 bg-[#547A95] dark:bg-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications (Below) */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#2C3947] dark:text-white mb-8 border-b-2 border-[#547A95] dark:border-white pb-2 text-center">
              Education & Certifications
            </h3>

            <div className="w-full max-w-2xl flex flex-col items-center">
              {education.map((item, index) => (
                <div key={index} className="w-full flex flex-col items-center">
                  {/* Education Card */}
                  <div className="w-full bg-white dark:bg-[#1e2d3d] rounded-xl p-6 shadow-sm border border-[#b0c8d8] dark:border-[#3a4d5e] text-center">
                    <span className="block text-lg font-semibold text-[#2C3947] dark:text-white">
                      {item.institution}
                    </span>
                    <span className="block text-[#4a5e6e] dark:text-[#d1d9e0] text-sm mt-1">
                      {item.degree}
                    </span>
                    <span className="inline-block text-[#547A95] dark:text-white text-xs font-semibold mt-2 px-3 py-0.5 rounded-full bg-[#E8EDF2] dark:bg-[#2C3947]">
                      {item.year}
                    </span>
                  </div>

                  {/* Center roadmap connector between connected items */}
                  {index < education.length - 1 && (
                    <div aria-hidden="true" className="flex flex-col items-center">
                      <div className="w-0.5 h-5 bg-[#547A95] dark:bg-white" />
                      <div className="w-3 h-3 rounded-full bg-[#547A95] dark:bg-white ring-4 ring-[#dce6ef] dark:ring-[#3a4d5e]" />
                      <div className="w-0.5 h-5 bg-[#547A95] dark:bg-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
