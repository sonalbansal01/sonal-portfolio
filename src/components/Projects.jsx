import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi'

const projects = [
  {
    title: 'Internal ERP Dashboard',
    company: 'Market99',
    description: 'End-to-end development of a scalable ERP dashboard handling reporting, inventory, and operations management for 500+ internal users. Achieved 40% faster report generation and 40% better table rendering via SQL optimization and React lazy loading.',
    tech: ['React', 'TypeScript', 'PHP Laravel', 'MySQL', 'Material UI', 'Docker'],
    color: '#D4A017',
    featured: true,
  },
  {
    title: 'Creative Automation Dashboard',
    description: 'Workflow dashboard to manage and automate digital asset processes with reusable React components and optimized rendering — reduced manual task time by ~40%.',
    tech: ['React', 'Node.js', 'REST APIs', 'Recharts'],
    color: '#6366f1',
  },
  {
    title: 'Visa Application Platform',
    company: 'Netcare Consulting',        // optional
    description: 'Apna description yahan likho.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    color: '#22c55e',
    github: 'https://github.com/sonalbansal01/visa-project',  // tera actual link
    live: 'https://visawebsite.com',      // live site ka link
  },

  {
    title: 'MoneyFinserv – Loan Services',
    description: 'Comprehensive financial services platform for loan management with secure backend validation, dynamic eligibility calculators, and responsive UI redesign. Reduced form errors significantly.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    color: '#f59e0b',
  },
  {
    title: 'Laravel Auction System',
    description: 'Real-time bidding and auction system with live bid updates, user authentication, role-based access, and payment integration. Built for scalability with event-driven architecture.',
    tech: ['Laravel', 'PHP', 'MySQL', 'WebSockets', 'Redis'],
    color: '#ef4444',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard with dynamic charts, data aggregation, and filterable reports. Features MongoDB aggregation pipelines and optimized API response times for large datasets.',
    tech: ['React', 'Node.js', 'MongoDB', 'Recharts', 'REST API'],
    color: '#8b5cf6',
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      style={{ position: 'relative' }}
    >
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          cursor: 'default',
        }}
        className="project-card"
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${project.color}40`
          e.currentTarget.style.boxShadow = `0 16px 48px ${project.color}18`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Color header bar */}
        <div style={{
          height: 4,
          background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
        }} />

        {/* Card body */}
        <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FiLayers size={20} style={{ color: project.color }} />
            </div>
            {project.featured && (
              <span style={{
                background: 'rgba(212,160,23,0.1)', color: '#D4A017',
                fontSize: 10, fontWeight: 700, padding: '4px 12px', borderRadius: 20,
                border: '1px solid rgba(212,160,23,0.2)', letterSpacing: 1,
              }}>FEATURED</span>
            )}
          </div>

          <h3 style={{ color: '#fff', fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{project.title}</h3>
          {project.company && (
            <p style={{ color: project.color, fontSize: 12, fontWeight: 600, marginBottom: 10, letterSpacing: 0.5 }}>@ {project.company}</p>
          )}
          <p style={{ color: '#bdbdbd', fontSize: 13.5, lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{project.description}</p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                background: `${project.color}10`, color: project.color,
                fontSize: 11, padding: '3px 10px', borderRadius: 6,
                border: `1px solid ${project.color}20`, fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: '#bdbdbd', fontSize: 12, fontWeight: 500,
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#bdbdbd'}
            >
              <FiGithub size={14} /> GitHub
            </a>
            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: '#bdbdbd', fontSize: 12, fontWeight: 500,
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = project.color}
              onMouseLeave={e => e.currentTarget.style.color = '#bdbdbd'}
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }} className="section-padding" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <span className="section-tag">What I've Built</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider" />
      </motion.div>

      <div style={{
        marginTop: 56,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
      }} className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} inView={inView} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1200px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
