import { HiOutlineShoppingBag, HiOutlineUserGroup, HiOutlineClipboardCheck } from 'react-icons/hi'
import { SiClaude } from 'react-icons/si'
import oscarPhoto from '../assets/oscar-photo.webp'
import Reveal from './Reveal.jsx'

const features = [
  {
    icon: HiOutlineShoppingBag,
    title: 'Especialista en Magento',
    desc: 'Desarrollo y personalización de temas y funcionalidades para tiendas e-commerce.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Interfaces centradas en el cliente',
    desc: 'Traduzco necesidades de negocio en experiencias claras, atractivas y funcionales.',
  },
  {
    icon: HiOutlineClipboardCheck,
    title: 'Buenas prácticas de código',
    desc: 'Code review, control de versiones con Git y metodologías ágiles con JIRA.',
  },
  {
    icon: SiClaude,
    title: 'IA como parte de mi flujo de trabajo',
    desc: 'Uso Claude y GitHub Copilot a diario para acelerar mockups, generar imágenes, escribir código y apoyar pruebas.',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 md:grid-cols-2">
        <Reveal direction="left">
          <span className="eyebrow">SOBRE MÍ</span>
          <h2 className="section-title mt-4">Diseño y desarrollo con atención al detalle</h2>
          <p className="section-subtitle">
            Soy desarrollador frontend con experiencia sólida en Magento, HTML, CSS y JavaScript.
            Desde 2021 trabajo en Aventi Solutions, donde actualmente me desempeño como Líder
            Frontend, personalizando temas e-commerce y construyendo interfaces intuitivas para
            los clientes. He ampliado mis habilidades hacia React y PHP, adaptándome a proyectos
            que van desde sitios estáticos hasta aplicaciones complejas de e-commerce.
          </p>

          <ul className="mt-10 space-y-6">
            {features.map((feature, i) => (
              <Reveal as="li" key={feature.title} delay={150 + i * 100} className="flex gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <feature.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal as="figure" direction="right" delay={150}>
          <img
            src={oscarPhoto}
            alt="Oscar Restrepo"
            className="aspect-[4/3.5] w-full rounded-2xl bg-ink-900 object-contain object-bottom shadow-card"
          />
          <figcaption className="mt-3 text-sm text-ink-500">
            Líder Frontend en Aventi Solutions — Cali, Colombia.
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}
