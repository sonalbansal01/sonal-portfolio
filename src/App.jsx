import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ marginLeft: 0 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
