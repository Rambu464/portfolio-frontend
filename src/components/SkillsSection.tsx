import type { SkillCategory } from '../data/types';

interface SkillsSectionProps {
  data: SkillCategory[];
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((group) => (
            <div key={group.category} className="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-indigo-600 mb-4 border-b border-indigo-50 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 dark:text-gray-300 text-sm font-medium">{skill.name}</span>
                      {skill.proficiencyLevel !== undefined && (
                        <span className="text-xs text-indigo-500 font-medium">
                          {skill.proficiencyLevel}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
