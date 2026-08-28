import GlassCard from '../components/GlassCard';

const HIGHLIGHTS = [
  'Built a self-service React app that let 5 engineering teams deploy and manage their own alarm configurations, replacing a manual process.',
  'Developed automation with AWS Lambda and CloudWatch to provision alarm points programmatically, reducing hands-on setup per team.',
  'Collaborated in an Agile team on iterative delivery and rapid problem-solving.',
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-10">Experience</h2>

      <GlassCard style={{ padding: '36px 40px' }} className="border-l-4 border-l-accent">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display font-bold text-xl text-fg">Software Engineer Intern</h3>
          <span className="text-fg-muted text-sm">May 2025 – July 2025</span>
        </div>
        <p className="text-accent font-semibold mb-5">Amazon</p>

        <ul className="flex flex-col gap-3">
          {HIGHLIGHTS.map(item => (
            <li key={item} className="flex gap-3 text-fg-muted leading-relaxed">
              <span className="text-accent mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </section>
  );
}
