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
    live: 'https://masterms.in/',
  },
  {
    title: 'MasterMS – Lead Management System',
    company: 'Market99',
    description:
      'Developed a comprehensive Lead Management System (MasterMS) for managing sales leads, customer follow-ups, lead assignments, status tracking, and reporting. Built scalable modules using React, TypeScript, Laravel, and MySQL, improving team productivity and streamlining lead management across departments.',
    tech: [
      'React',
      'TypeScript',
      'PHP Laravel',
      'MySQL',
      'Material UI',
      'Docker'
    ],
    color: '#D4A017',
    featured: true,
    live: 'https://masterms.in/',
  },
  {
    title: 'Netcare Consulting Platform',
    company: 'Netcare Consulting',
    description: 'Full-stack consulting platform built with React, PHP, and MySQL. Improved backend performance by 30% through code refactoring, implemented dynamic forms and multi-step workflows reducing manual data entry errors by ~25%.',
    tech: ['React', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
    color: '#6366f1',
    live: 'https://netcareconsulting.com/',
  },
  {
    title: 'Visa Application Platform',
    company: 'Netcare Consulting',
    description: 'Full-featured visa application and processing platform with dynamic multi-step forms, secure document uploads, and real-time status tracking. Improved form submission by 35% and mobile usability by 25%.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#22c55e',
    live: 'https://applycscscardonline.com/',
  },
  {
    title: 'Triumph777',
    description: 'High-performance web platform with secure backend validation, optimized page load speed and SEO scores. Enhanced Core Web Vitals by 20% via payload optimization and image compression.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    color: '#ef4444',
    live: 'https://triumph777.com/',
  },
  {
    title: 'GoTravellerz – UK Travel Portal',
    description: 'UK-based travel and course portal with responsive UI design, structured backend validation, and SEO-optimized pages. Delivered modular features across multiple Agile sprints.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#f59e0b',
    live: 'https://gotravellerz.co.uk/',
  },
  {
    title: 'MoneyFinserv – Loan Services',
    description: 'Comprehensive financial services platform for loan management with secure backend validation, dynamic eligibility calculators, and responsive UI redesign. Reduced form errors significantly and improved mobile usability by 25%.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    color: '#8b5cf6',
    live: 'https://moneyfinserv.com/web/',
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
        <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }} />

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

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                background: `${project.color}10`, color: project.color,
                fontSize: 11, padding: '3px 10px', borderRadius: 6,
                border: `1px solid ${project.color}20`, fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: '#bdbdbd', fontSize: 12, fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#bdbdbd'}
              >
                <FiGithub size={14} /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: '#bdbdbd', fontSize: 12, fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = project.color}
                onMouseLeave={e => e.currentTarget.style.color = '#bdbdbd'}
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
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