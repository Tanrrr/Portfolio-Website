import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Featured',   href: '#iceiq' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
];

const SECTION_IDS = ['hero', 'iceiq', 'projects', 'experience', 'about', 'contact'];

function useActiveSection() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const ratios = new Map();

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId) setActive(bestId);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.75, 1] }
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl border-b transition-colors ${
        scrolled ? 'bg-ink/80 border-glass-border' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={e => handleNav(e, '#hero')}
          className="heading-accent font-display font-bold text-lg no-underline flex-shrink-0"
        >
          Tanner Bronson
        </a>

        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href.replace('#', '');
            return (
              <a
                key={href}
                href={href}
                onClick={e => handleNav(e, href)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium no-underline whitespace-nowrap transition-colors ${
                  isActive ? 'bg-accent-dim text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
