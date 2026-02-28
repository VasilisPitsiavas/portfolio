import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  liveDemo,
  github,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50 hover:bg-gray-900 hover:border-[#00ff88]/50 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-gray-800 text-[#00ff88] rounded-full border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {liveDemo && (
          <Link
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#00ff88] hover:text-white transition-colors"
          >
            Live Demo →
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            GitHub →
          </Link>
        )}
      </div>
    </div>
  );
}
