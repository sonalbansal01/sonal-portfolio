import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import sonalImg from '../assets/sonal.png'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${sonalImg})`,
        backgroundSize: '100%',
        backgroundPosition: '10% center',
        backgroundRepeat: 'no-repeat',
      }} />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.25) 100%)',
      }} />
      {/* Accent glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 200,
        background: 'radial-gradient(ellipse, rgba(212,160,23,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        paddingLeft: 'max(280px, calc(240px + 60px))',
        paddingRight: 60,
        paddingTop: 80,
        maxWidth: 1200,
      }} className="hero-content">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#D4A017', fontSize: 16, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-1px',
            color: '#fff',
            marginBottom: 8,
          }}
        >
          SONAL
          <br />
          <span style={{ color: '#D4A017' }}>BANSAL</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: '#bdbdbd', fontWeight: 400, marginBottom: 16, letterSpacing: 1 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.62 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}
        >
          {['Laravel', 'React', 'PHP', 'MySQL', 'TypeScript'].map(tech => (
            <span key={tech} style={{
              background: 'rgba(212,160,23,0.1)',
              border: '1px solid rgba(212,160,23,0.25)',
              color: '#D4A017',
              padding: '4px 14px',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}>{tech}</span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.74 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}
        >
          <a href="/Sonal_Bansal_Resume.pdf" download className="btn-primary">
            <FiDownload size={16} /> Download Resume
          </a>
          <button className="btn-outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects <FiArrowRight size={16} />
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.85 }}
          style={{ display: 'flex', gap: 16 }}
        >
          {[
<<<<<<< HEAD
            { icon: FiGithub, href: 'https://github.com/sonalbansal01/', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sonal-bansal-394577230/', label: 'LinkedIn' },
=======
            { icon: FiGithub, href: 'https://github.com/', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
>>>>>>> 3e34af337986dfc45b0c692cab04b2785b4b49fe
            { icon: FiMail, href: 'mailto:sonalbansal1290@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, color: '#D4A017' }}
              style={{
                width: 44, height: 44,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#bdbdbd',
                transition: 'all 0.3s',
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="float-anim"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: '#bdbdbd', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
          cursor: 'pointer', zIndex: 2,
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll</span>
        <FiChevronDown size={18} style={{ color: '#D4A017' }} />
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-content { padding-left: 32px !important; padding-right: 32px !important; }
        }
        @media (max-width: 640px) {
          .hero-content { padding-left: 20px !important; padding-right: 20px !important; padding-top: 100px !important; }
        }
      `}</style>
    </section>
  )
}
