import type { SkillCategory } from '../data/types';

interface SkillsSectionProps {
  data: SkillCategory[];
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#1e2d3d] px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3947] dark:text-white mb-12 text-center">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((group) => (
            <div
              key={group.category}
              className="bg-[#E8EDF2] dark:bg-[#2C3947] rounded-xl shadow-sm p-6 border border-[#b0c8d8] dark:border-[#3a4d5e]"
            >
              <h3 className="text-lg font-semibold text-[#547A95] dark:text-[#C2A56D] mb-4 border-b border-[#b0c8d8] dark:border-[#3a4d5e] pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span className="text-[#2C3947] dark:text-[#d1d9e0] text-sm font-medium">{skill.name}</span>
                    {skill.proficiencyLevel !== undefined && (
                      <span className="text-xs text-[#547A95] dark:text-[#C2A56D] font-medium">
                        {skill.proficiencyLevel}
                      </span>
                    )}
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
