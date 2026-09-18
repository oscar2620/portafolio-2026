import { HiOutlineArrowRight } from 'react-icons/hi'
import oscarPhoto from '../assets/oscar-photo.webp'
import Reveal from './Reveal.jsx'

const stats = [
  { value: '4+', label: 'Años de experiencia', desc: 'Frontend y desarrollo Magento en Aventi Solutions' },
  { value: '14', label: 'Tecnologías', desc: 'HTML, CSS, JavaScript, React, PHP, Magento y más' },
  { value: 'B1', label: 'Inglés', desc: 'Español nativo, inglés B1' },
]

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 md:grid-cols-2">
        <Reveal direction="up">
          <span className="eyebrow">DESARROLLADOR FRONTEND</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Oscar Restrepo <span className="text-brand-500">—</span> Desarrollador Frontend
          </h1>
          <p className="mt-6 max-w-xl text-ink-500">
            Líder Frontend en Aventi Solutions. Desarrollo y personalizo interfaces y temas
            Magento, y construyo componentes con React y JavaScript, apoyado en herramientas de
            IA como Claude y GitHub Copilot, siempre enfocado en la experiencia del usuario final.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-ink-700">
              Frontend · Magento · e-commerce
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-ink-700">
              React · JavaScript · PHP
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#proyectos" className="btn-primary">
              Ver proyectos
              <HiOutlineArrowRight className="ml-2" size={16} />
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
            {stats.map((stat, i) => (
              <Reveal as="div" key={stat.label} delay={200 + i * 100}>
                <dt className="text-2xl font-bold text-ink-900">{stat.value}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink-800">{stat.label}</dd>
                <dd className="mt-1 text-xs text-ink-500">{stat.desc}</dd>
              </Reveal>
            ))}
          </dl>
        </Reveal>

        <Reveal direction="right" delay={150} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-50 sm:-inset-8" />
          <div className="animate-float">
            <img
              src={oscarPhoto}
              alt="Oscar Restrepo"
              className="aspect-[4/5] w-full rounded-2xl bg-ink-900 object-cover object-top shadow-card"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
