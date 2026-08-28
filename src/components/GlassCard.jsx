import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GlassCard({
  children,
  className = '',
  animate = true,
  delay = 0,
  hover = false,
  style = {},
}) {
  const inner = (
    <div
      className={`glass-card glass-shine relative overflow-hidden ${className}`}
      style={style}
    >
      {children}
    </div>
  );

  if (!animate) return inner;

  return (
    <motion.div
      className={`glass-card glass-shine relative overflow-hidden ${className}`}
      style={style}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      whileHover={hover ? { y: -4, boxShadow: '0 16px 48px rgba(0,150,255,0.25), inset 0 1px 0 rgba(255,255,255,0.6)' } : undefined}
    >
      {children}
    </motion.div>
  );
}
