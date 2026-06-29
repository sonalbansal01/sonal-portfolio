import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { id: 'home', label: 'Home', icon: FiHome },
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'skills', label: 'Skills', icon: FiCode },
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'education', label: 'Education', icon: FiBook },
  { id: 'contact', label: 'Contact', icon: FiMail },
]

export default function Sidebar() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.3 }
    )
    navItems.forEach(n => {
      const el = document.getElementById(n.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const NavLinks = () => (
    <nav style={{ width: '100%' }}>
      {navItems.map((item, i) => {
        const Icon = item.icon
        const isActive = active === item.id
        return (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
            onClick={() => scrollTo(item.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              background: isActive ? 'rgba(212,160,23,0.1)' : 'transparent',
              borderLeft: isActive ? '3px solid #D4A017' : '3px solid transparent',
              border: 'none',
              color: isActive ? '#D4A017' : '#bdbdbd',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: isActive ? 600 : 400,
              letterSpacing: '0.5px',
              transition: 'all 0.2s',
              textAlign: 'left',
            }}
            whileHover={{ color: '#D4A017', x: 4 }}
          >
            <Icon size={16} />
            {item.label}
          </motion.button>
        )
      })}
    </nav>
  )

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            position: 'fixed', top: 20, left: 20, zIndex: 200,
            background: '#1b1b1b', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8, padding: 10, color: '#fff', cursor: 'pointer'
          }}
        >
          <FiMenu size={20} />
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                className="mobile-overlay"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                className="mobile-menu"
                initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                  <span style={{ color: '#D4A017', fontWeight: 800, fontSize: 18 }}>SB</span>
                  <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', color: '#bdbdbd', cursor: 'pointer' }}>
                    <FiX size={20} />
                  </button>
                </div>
                <NavLinks />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <aside className="sidebar">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: 40, textAlign: 'center' }}
      >
        <div style={{
          width: 52, height: 52, borderRadius: 12,
          background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, fontWeight: 900, color: '#D4A017',
          margin: '0 auto 12px'
        }}>SB</div>
        <p style={{ color: '#bdbdbd', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>Portfolio</p>
      </motion.div>

      <NavLinks />

      {/* Bottom status */}
      <div style={{ marginTop: 'auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#bdbdbd', fontSize: 11 }}>Available for work</span>
        </div>
      </div>
    </aside>
  )
}
