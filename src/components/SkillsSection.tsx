import { useState } from 'react';
import type { SkillCategory } from '../data/types';

interface SkillsSectionProps {
  data: SkillCategory[];
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#1e2d3d] px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3947] dark:text-white mb-12 text-center">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {data.map((group) => {
            const isOpen = !!openCategories[group.category];
            return (
              <div
                key={group.category}
                className="bg-[#E8EDF2] dark:bg-[#2C3947] rounded-xl shadow-sm border border-[#b0c8d8] dark:border-[#3a4d5e] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(group.category)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#547A95] hover:bg-[#dce6ef]/60 dark:hover:bg-[#3a4d5e]/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#547A95] dark:text-white">
                    {group.category}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-[#547A95] dark:text-white transition-transform duration-200 flex-shrink-0 ml-3 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpen && (
                  <ul className="px-5 pb-5 pt-3 space-y-3 border-t border-[#b0c8d8] dark:border-[#3a4d5e]">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between">
                        <span className="text-[#2C3947] dark:text-[#d1d9e0] text-sm font-medium">
                          {skill.name}
                        </span>
                        {skill.proficiencyLevel !== undefined && (
                          <span className="text-xs text-[#547A95] dark:text-white font-medium">
                            {skill.proficiencyLevel}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
