import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlassCard from './GlassCard';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <GlassCard delay={delay} hover style={{ padding: '28px 32px' }} className="flex flex-col gap-3">
      <h3 className="font-display font-bold text-xl text-fg">{project.title}</h3>
      <p className="text-accent text-sm font-semibold">{project.tagline}</p>
      <p className="text-fg-muted text-sm leading-relaxed flex-1">{project.description}</p>
      {project.outcome && (
        <p className="text-fg-muted text-sm leading-relaxed italic">{project.outcome}</p>
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.stack.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <FaExternalLinkAlt size={13} /> Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <FaGithub size={15} /> GitHub
          </a>
        )}
      </div>
    </GlassCard>
  );
}
