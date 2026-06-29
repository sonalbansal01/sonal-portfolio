import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMonitor, FiServer, FiDatabase, FiTool } from 'react-icons/fi'

const skillCategories = [
  {
    icon: FiMonitor, label: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript / JavaScript', level: 88 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Material UI', level: 80 },
      { name: 'Redux Toolkit', level: 78 },
    ]
  },
  {
    icon: FiServer, label: 'Backend',
    skills: [
      { name: 'PHP / Laravel', level: 88 },
      { name: 'REST API Design', level: 90 },
      { name: 'Node.js', level: 65 },
      { name: 'JWT & OAuth 2.0', level: 82 },
      { name: 'FastAPI', level: 60 },
    ]
  },
  {
    icon: FiDatabase, label: 'Database',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'Redis (caching)', level: 72 },
      { name: 'MongoDB', level: 60 },
    ]
  },
  {
    icon: FiTool, label: 'Tools & Cloud',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'AWS (EC2, S3, RDS)', level: 70 },
      { name: 'Docker', level: 65 },
      { name: 'Jest (unit testing)', level: 72 },
      { name: 'Vite / Webpack', level: 78 },
    ]
  },
]

function SkillBar({ name, level, inView, delay }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ color: '#bdbdbd', fontSize: 13 }}>{name}</span>
        <span style={{ color: '#D4A017', fontSize: 12, fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
  }

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }} className="section-padding" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <span className="section-tag">What I Know</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider" />
      </motion.div>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.label}
              className="card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, borderColor: 'rgba(212,160,23,0.3)' }}
              style={{ padding: '28px 28px 24px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} style={{ color: '#D4A017' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>{cat.label}</h3>
              </div>
              {cat.skills.map((s, j) => (
                <SkillBar key={s.name} name={s.name} level={s.level} inView={inView} delay={i * 0.1 + j * 0.08} />
              ))}
            </motion.div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .section-padding > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
