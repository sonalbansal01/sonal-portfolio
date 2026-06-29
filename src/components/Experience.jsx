import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    company: 'Market99',
    role: 'Full Stack Developer',
    period: 'Aug 2024 – Present',
    current: true,
    highlights: [
      'Architected modular enterprise-grade ERP dashboard using React.js, TypeScript, PHP (Laravel), MySQL, and REST APIs',
      'Improved large-table rendering by 40% via lazy loading and code splitting; built reusable UI component library',
      'Reduced SQL report generation time by 40% through query optimization, indexing, and stored procedures',
      'Engineered secure REST APIs with JWT authentication and Role-Based Access Control (RBAC)',
      'Leveraged AI dev tools (Claude Code, Cursor) to accelerate feature velocity and code review quality',
    ],
    tech: ['React.js', 'TypeScript', 'PHP Laravel', 'MySQL', 'JWT/RBAC', 'Redis', 'Docker'],
  },
  {
    company: 'Netcare Consulting Pvt. Ltd.',
    role: 'Web Developer',
    period: 'Sept 2022 – Dec 2023',
    current: false,
    highlights: [
      'Improved backend performance by 30% through code refactoring across full-stack applications',
      'Implemented backend automation for dynamic forms, data validation, and multi-step workflows — reducing errors by ~25%',
      'Enhanced page load speed and Core Web Vitals by 20% via payload optimization and image compression',
      'Delivered modular features across 6+ Agile sprints with Git-based branching workflows',
    ],
    tech: ['React', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    company: 'Finlux Technologies',
    role: 'Web Developer',
    period: 'Sept 2021 – Sept 2022',
    current: false,
    highlights: [
      'Improved operational efficiency by 20–25% by refactoring service-based web platforms (PHP, MySQL)',
      'Developed secure form handling workflows — reducing form errors and support tickets by ~30%',
      'Enhanced SEO and page performance through script optimization and structured markup',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <span className="section-tag">My Journey</span>
        <h2 className="section-title">Work Experience</h2>
        <div className="section-divider" />
      </motion.div>

      <div style={{ marginTop: 56, position: 'relative', paddingLeft: 48 }}>
        {/* Vertical line */}
        <div className="timeline-line" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.18 }}
            style={{ position: 'relative', marginBottom: 40 }}
          >
            {/* Dot */}
            <div className="timeline-dot" style={{ position: 'absolute', left: -42, top: 24 }} />

            <motion.div
              className="card"
              whileHover={{ y: -4, borderColor: 'rgba(212,160,23,0.35)' }}
              style={{ padding: '28px 32px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>{exp.company}</h3>
                    {exp.current && (
                      <span style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', fontSize: 10, fontWeight: 600, padding: '2px 10px', borderRadius: 20, border: '1px solid rgba(34,197,94,0.2)', letterSpacing: 0.5 }}>
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                    <FiBriefcase size={13} style={{ color: '#D4A017' }} />
                    <span style={{ color: '#D4A017', fontSize: 14, fontWeight: 600 }}>{exp.role}</span>
                  </div>
                </div>
                <span style={{
                  color: '#bdbdbd', fontSize: 12, background: 'rgba(255,255,255,0.04)',
                  padding: '6px 14px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)',
                  whiteSpace: 'nowrap',
                }}>{exp.period}</span>
              </div>

              <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: 'none' }}>
                {exp.highlights.map((h, j) => (
                  <li key={j} style={{ color: '#bdbdbd', fontSize: 13.5, lineHeight: 1.7, marginBottom: 6, display: 'flex', gap: 10 }}>
                    <span style={{ color: '#D4A017', marginTop: 2, flexShrink: 0 }}>→</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {exp.tech.map(t => (
                  <span key={t} style={{
                    background: 'rgba(212,160,23,0.07)', color: '#D4A017',
                    fontSize: 11, padding: '4px 12px', borderRadius: 6,
                    border: '1px solid rgba(212,160,23,0.15)', fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
