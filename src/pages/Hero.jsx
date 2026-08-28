import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import headshot from '../images/me4.jpg';
import resumePdf from '../images/resume.pdf';

const SOCIALS = [
  { href: 'https://github.com/Tanrrr', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/tanner-bronson-04399b238/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:tanrrrbronson@gmail.com', icon: FaEnvelope, label: 'Email' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24">
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl animate-mesh-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl animate-mesh-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)', animationDelay: '-7s' }}
      />

      <div className="relative max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={headshot}
          alt="Tanner Bronson"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-glass-border shadow-glass-lg flex-shrink-0"
        />

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-accent text-4xl md:text-6xl font-bold leading-tight mb-3"
          >
            Tanner Bronson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-fg-muted font-medium mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-fg-muted leading-relaxed max-w-xl mb-8"
          >
            I build full-stack and cloud-native applications — most recently a
            serverless SaaS analytics platform and internal tooling at Amazon.
            Based in Edmonton, Alberta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a href="#iceiq" className="btn-accent">View My Work</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
            <a href={resumePdf} download="Tanner_Bronson_Resume.pdf" className="btn-outline">
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex gap-5"
          >
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-fg-muted hover:text-accent transition-colors"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
