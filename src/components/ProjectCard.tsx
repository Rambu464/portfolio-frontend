import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, repoUrl, demoUrl, previewImageUrl } = project;

  return (
    <div className="bg-white dark:bg-[#3a4d5e] rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow border border-[#b0c8d8] dark:border-[#4a6070]">
      {previewImageUrl && (
        <img
          src={previewImageUrl}
          alt={`Preview of ${title}`}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#2C3947] dark:text-white mb-2">{title}</h3>
        <p className="text-[#4a5e6e] dark:text-[#d1d9e0] text-sm leading-relaxed mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full border"
              style={{
                backgroundColor: '#dce6ef',
                color: '#547A95',
                borderColor: '#b0c8d8',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {(repoUrl || demoUrl) && (
          <div className="flex gap-3 mt-auto">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#547A95] focus:ring-offset-2 transition-all"
                style={{ backgroundColor: '#2C3947' }}
              >
                Repository
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#547A95] focus:ring-offset-2 transition-all"
                style={{ backgroundColor: '#547A95' }}
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
