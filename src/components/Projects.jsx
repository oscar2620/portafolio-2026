import { HiOutlineExternalLink } from 'react-icons/hi'
import Reveal from './Reveal.jsx'

const projects = [
  {
    title: 'Gifos',
    tags: 'JavaScript · API de Giphy',
    desc: 'Aplicación web interactiva para compartir GIFs animados, con integración de la API de Giphy, funciones asíncronas y una experiencia adaptada a múltiples dispositivos y tamaños de pantalla.',
    image: 'https://picsum.photos/seed/project-gifos/700/500',
    link: 'https://daniele0802.github.io/Proyecto-GIFOS/',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <span className="eyebrow">PROYECTOS</span>
          <h2 className="section-title mt-4">Algunos proyectos recientes</h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {projects.map((project, i) => (
            <Reveal as="div" key={project.title} delay={i * 100} className="w-full max-w-sm">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="card group block overflow-hidden p-0 hover:border-brand-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[7/5] w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {project.tags}
                  </span>
                  <h3 className="mt-2 flex items-center gap-1.5 text-lg font-semibold text-ink-900">
                    {project.title}
                    <HiOutlineExternalLink className="text-ink-400 transition group-hover:text-brand-600" size={16} />
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{project.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
