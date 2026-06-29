import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const contactInfo = [
  { icon: FiPhone, label: 'Phone', value: '+91 8700494999', href: 'tel:+918700494999' },
  { icon: FiMail, label: 'Email', value: 'sonalbansal1290@gmail.com', href: 'mailto:sonalbansal1290@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Faridabad, Haryana, India', href: null },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/sonal', href: 'https://github.com' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/sonal', href: 'https://linkedin.com' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }} className="section-padding" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <div className="section-divider" />
        <p style={{ color: '#bdbdbd', marginTop: 16, fontSize: 15, maxWidth: 500 }}>
          I'm open to new opportunities and collaborations. Whether you have a project, a question, or just want to say hi — my inbox is always open.
        </p>
      </motion.div>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className="contact-grid">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 28 }}>Let's Connect</h3>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={16} style={{ color: '#D4A017' }} />
                </div>
                <div>
                  <p style={{ color: '#bdbdbd', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      style={{ color: '#fff', fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#D4A017'}
                      onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                    >{value}</a>
                  ) : (
                    <p style={{ color: '#fff', fontSize: 13, fontWeight: 500 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card" style={{ padding: '36px' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ color: '#bdbdbd', fontSize: 12, display: 'block', marginBottom: 8, letterSpacing: 0.5 }}>Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    className="form-input" placeholder="Sonal Bansal" />
                </div>
                <div>
                  <label style={{ color: '#bdbdbd', fontSize: 12, display: 'block', marginBottom: 8, letterSpacing: 0.5 }}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required
                    className="form-input" placeholder="hello@example.com" />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ color: '#bdbdbd', fontSize: 12, display: 'block', marginBottom: 8, letterSpacing: 0.5 }}>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} required
                  className="form-input" placeholder="Job Opportunity / Collaboration" />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ color: '#bdbdbd', fontSize: 12, display: 'block', marginBottom: 8, letterSpacing: 0.5 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required
                  className="form-input" rows={5} placeholder="Tell me about your project or opportunity..."
                  style={{ resize: 'vertical', minHeight: 120 }} />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend size={16} />
                {sent ? 'Message Sent! ✓' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-grid > div:last-child .card > form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
