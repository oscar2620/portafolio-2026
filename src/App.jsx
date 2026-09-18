import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
// import Testimonials from './components/Testimonials.jsx' // sin testimonios reales aún — reactivar cuando los tengas
import CompanyWork from './components/CompanyWork.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <CompanyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
