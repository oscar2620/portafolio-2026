import { SiReact, SiJavascript, SiPhp, SiHtml5, SiLess, SiSass, SiJquery, SiGit } from 'react-icons/si'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Reveal from './Reveal.jsx'

const skills = [
  { icon: HiOutlineShoppingBag, title: 'Magento', desc: 'Personalización de temas y funcionalidades para tiendas e-commerce' },
  { icon: SiPhp, title: 'PHP', desc: 'Lógica de backend para plataformas como Magento' },
  { icon: SiJavascript, title: 'JavaScript', desc: 'Interactividad, lógica de negocio y consumo de APIs' },
  { icon: SiReact, title: 'React', desc: 'Componentes e interfaces de usuario reutilizables' },
  { icon: SiHtml5, title: 'HTML & CSS', desc: 'Estructura y estilos semánticos, accesibles y responsivos' },
  { icon: SiLess, title: 'LESS & SASS', desc: 'Preprocesadores CSS para estilos escalables y mantenibles' },
  { icon: SiJquery, title: 'jQuery', desc: 'Manipulación del DOM e interactividad en proyectos existentes' },
  { icon: SiGit, title: 'Git', desc: 'Versionado, ramas y flujos de trabajo colaborativos' },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <span className="eyebrow">SKILLS</span>
          <h2 className="section-title mt-4">
            Herramientas y tecnologías que uso para construir interfaces
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <Reveal as="div" key={skill.title} delay={(i % 4) * 90}>
              <div className="card h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <skill.icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold text-ink-900">{skill.title}</h3>
                <p className="mt-1 text-sm text-ink-500">{skill.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
