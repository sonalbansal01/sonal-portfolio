import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '40%', label: 'Performance Gains' },
  { value: '3', label: 'Companies' },
]

const highlights = [
  'Laravel', 'React', 'PHP', 'JavaScript',
  'REST APIs', 'Responsive Development', 'Modern UI', 'TypeScript',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-tag">Who I Am</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
      </motion.div>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        {/* Left: Text */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.15 }}
        >
          <p style={{ color: '#bdbdbd', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
            I'm a <span style={{ color: '#D4A017', fontWeight: 600 }}>Full Stack Developer</span> with 4+ years of end-to-end experience building scalable, high-performance web applications. My work spans enterprise ERP dashboards, client-facing platforms, and automation tools.
          </p>
          <p style={{ color: '#bdbdbd', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            I specialize in <span style={{ color: '#fff' }}>React.js, TypeScript, PHP (Laravel), and REST APIs</span>, with a proven track record of delivering measurable results — including 40% reductions in report generation time and 30% backend performance improvements.
          </p>

          {/* Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {highlights.map(h => (
              <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FiCheckCircle size={14} style={{ color: '#D4A017', flexShrink: 0 }} />
                <span style={{ color: '#bdbdbd', fontSize: 13 }}>{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Stats */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="card"
                whileHover={{ y: -4, borderColor: 'rgba(212,160,23,0.4)' }}
                style={{ padding: '28px 24px', textAlign: 'center' }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#D4A017', lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: '#bdbdbd', fontSize: 12, marginTop: 8, letterSpacing: 0.5 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="card" style={{ marginTop: 20, padding: '24px' }}>
            <p style={{ color: '#bdbdbd', fontSize: 13, lineHeight: 1.7 }}>
              🎓 MCA from <span style={{ color: '#fff' }}>Manav Rachna International Institute</span><br />
              📍 Based in Faridabad, Haryana — open to remote & hybrid roles<br />
              ⚡ Currently at <span style={{ color: '#D4A017' }}>Market99</span> — building enterprise ERP systems
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .section-padding > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
