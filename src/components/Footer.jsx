import { motion } from 'framer-motion'
import { FiArrowUp, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      paddingLeft: 'max(280px, calc(240px + 60px))',
      paddingRight: 60,
      paddingTop: 32,
      paddingBottom: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }} className="footer-inner">
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#bdbdbd', fontSize: 13 }}>
        <span>Designed &amp; Developed by</span>
        <span style={{ color: '#D4A017', fontWeight: 700 }}>Sonal Bansal</span>
        <FiHeart size={13} style={{ color: '#D4A017', marginLeft: 4 }} />
      </div>

      <motion.button
        onClick={scrollTop}
        whileHover={{ y: -4, background: '#D4A017', color: '#000' }}
        style={{
          width: 44, height: 44, borderRadius: 10,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#bdbdbd', cursor: 'pointer',
          transition: 'all 0.3s',
        }}
      >
        <FiArrowUp size={18} />
      </motion.button>

      <style>{`
        @media (max-width: 1024px) {
          .footer-inner { padding-left: 32px !important; padding-right: 32px !important; }
        }
        @media (max-width: 640px) {
          .footer-inner { padding-left: 20px !important; padding-right: 20px !important; flex-direction: column; gap: 16px; }
        }
      `}</style>
    </footer>
  )
}
