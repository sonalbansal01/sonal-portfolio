import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook } from 'react-icons/fi'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Manav Rachna International Institute of Research and Studies',
    location: 'Faridabad, Haryana',
    period: '2021 – 2023',
    details: 'Advanced coursework in software engineering, algorithms, databases, and web technologies. Focused on full-stack development and cloud computing.',
    highlights: ['Software Engineering', 'Database Management', 'Web Technologies', 'Cloud Computing'],
    badge: 'M.C.A',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'DAV Institute of Management',
    location: 'Faridabad, Haryana',
    period: '2017 – 2020',
    details: 'Foundation in computer science, programming languages, data structures, and object-oriented design. Built core programming and problem-solving skills.',
    highlights: ['Data Structures', 'OOP Concepts', 'Web Basics', 'Database Systems'],
    badge: 'B.C.A',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <span className="section-tag">Academic Background</span>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />
      </motion.div>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }} className="edu-grid">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.18 }}
            whileHover={{ y: -6, borderColor: 'rgba(212,160,23,0.35)', boxShadow: '0 16px 40px rgba(212,160,23,0.1)' }}
            style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
          >
            {/* Background accent */}
            <div style={{
              position: 'absolute', top: -20, right: -20, width: 120, height: 120,
              borderRadius: '50%', background: 'rgba(212,160,23,0.04)',
              pointerEvents: 'none',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <FiBook size={20} style={{ color: '#D4A017' }} />
              </div>
              <span style={{
                color: '#D4A017', fontSize: 24, fontWeight: 900,
                opacity: 0.15, letterSpacing: -1,
              }}>{edu.badge}</span>
            </div>

            <h3 style={{ color: '#fff', fontSize: 17, fontWeight: 700, lineHeight: 1.3, marginBottom: 8 }}>{edu.degree}</h3>
            <p style={{ color: '#D4A017', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{edu.institution}</p>
            <p style={{ color: '#bdbdbd', fontSize: 12, marginBottom: 4 }}>{edu.location}</p>

            <span style={{
              display: 'inline-block', background: 'rgba(255,255,255,0.04)',
              color: '#bdbdbd', fontSize: 12, padding: '4px 12px',
              borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', marginBottom: 16,
            }}>{edu.period}</span>

            <p style={{ color: '#bdbdbd', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{edu.details}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {edu.highlights.map(h => (
                <span key={h} style={{
                  background: 'rgba(212,160,23,0.07)', color: '#D4A017',
                  fontSize: 11, padding: '4px 10px', borderRadius: 6,
                  border: '1px solid rgba(212,160,23,0.15)', fontWeight: 500,
                }}>{h}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
