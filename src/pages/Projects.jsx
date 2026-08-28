import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';

const secondary = PROJECTS.filter(p => !p.featured);

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-2">More Projects</h2>
      <p className="text-fg-muted mb-10">A few other things I've built recently.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondary.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
