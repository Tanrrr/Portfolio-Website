import GlassCard from '../components/GlassCard';

const SKILLS = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C#', 'C++'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'Next.js', 'Selenium', 'REST API'] },
  { category: 'Databases & Tools', items: ['MySQL', 'SQLite3', 'Git', 'AWS', 'Firebase', 'Figma'] },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-10">About</h2>

      <GlassCard style={{ padding: '36px 40px' }} className="mb-6">
        <p className="text-fg-muted leading-relaxed mb-4">
          I'm a Computer Science student at the University of Alberta and a
          software engineer who likes building things end-to-end — from
          serverless cloud backends to the frontends that sit on top of them.
          My recent work spans AWS-based SaaS platforms, internal tooling at
          Amazon, and full-stack apps with real users.
        </p>
        <p className="text-fg-muted leading-relaxed">
          University of Alberta — B.Sc. Computer Science, expected 2028.
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map(({ category, items }) => (
          <GlassCard key={category} style={{ padding: '24px 28px' }}>
            <h3 className="text-accent text-xs font-bold uppercase tracking-wider mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map(item => <span key={item} className="tag">{item}</span>)}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
