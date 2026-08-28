import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const FIELDS = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'subject', label: 'Subject', type: 'text' },
];

const SOCIALS = [
  { href: 'https://github.com/Tanrrr', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/tanner-bronson-04399b238/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:tanrrrbronson@gmail.com', icon: FaEnvelope, label: 'tanrrrbronson@gmail.com' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    emailjs.init('WqJJg1oSstq-q621m');
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    try {
      const response = await emailjs.send('service_0jnmt78', 'template_1', {
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      if (response.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ type: 'error', message: `Failed to send: ${error.message || 'Please try again.'}` });
    }
  };

  return (
    <section id="contact" className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-10">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard style={{ padding: '32px 36px' }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {FIELDS.map(({ id, label, type }) => (
              <div key={id}>
                <label className="text-sm font-medium text-fg-muted block mb-1.5">{label}</label>
                <input
                  type={type} id={id} name={id}
                  value={formData[id]} onChange={handleChange} required
                  className="glass-input"
                />
              </div>
            ))}

            <div>
              <label className="text-sm font-medium text-fg-muted block mb-1.5">Message</label>
              <textarea
                id="message" name="message"
                value={formData.message} onChange={handleChange} required
                rows={4} className="glass-input resize-y"
              />
            </div>

            <motion.button
              type="submit"
              className="btn-accent mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.message && (
              <p className={`text-center text-sm ${
                status.type === 'success' ? 'text-green-400'
                : status.type === 'error' ? 'text-red-400'
                : 'text-fg-muted'
              }`}>
                {status.message}
              </p>
            )}
          </form>
        </GlassCard>

        <GlassCard style={{ padding: '32px 36px' }}>
          <h3 className="font-display font-bold text-xl text-fg mb-3">Let's connect</h3>
          <p className="text-fg-muted leading-relaxed mb-6">
            I'm always open to chatting about new opportunities, interesting
            problems, or anything you're building.
          </p>

          <div className="flex flex-col gap-4">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-fg-muted hover:text-accent transition-colors text-sm font-medium"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </GlassCard>
      </div>

      <p className="text-center text-fg-muted text-xs mt-16 pb-8">
        © {new Date().getFullYear()} Tanner Bronson. Built with React & Tailwind.
      </p>
    </section>
  );
}
