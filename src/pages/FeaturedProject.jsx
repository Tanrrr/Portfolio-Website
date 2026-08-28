import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { PROJECTS } from '../data/projects';

const iceiq = PROJECTS.find(p => p.id === 'iceiq');

export default function FeaturedProject() {
  if (!iceiq) return null;

  return (
    <section id="iceiq" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="tag mb-4"
      >
        Featured Project
      </motion.p>

      <GlassCard style={{ padding: '40px 44px' }}>
        <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-2">
          {iceiq.title}
        </h2>
        <p className="text-fg-muted text-lg mb-6">{iceiq.tagline}</p>
        <p className="text-fg-muted leading-relaxed mb-8">{iceiq.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {iceiq.metrics.map(({ label, value }) => (
            <div key={label}>
              <p className="heading-accent text-2xl font-bold">{value}</p>
              <p className="text-fg-muted text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {iceiq.stack.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href={iceiq.live} target="_blank" rel="noopener noreferrer" className="btn-accent">
            View Live Site
          </a>
        </div>
      </GlassCard>
    </section>
  );
}
