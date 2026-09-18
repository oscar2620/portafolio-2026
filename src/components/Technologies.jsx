import { SiPhp, SiJavascript, SiReact, SiGithub, SiGitlab, SiJira, SiFigma, SiXml } from 'react-icons/si'
import Reveal from './Reveal.jsx'

const technologies = [
  { icon: SiPhp, title: 'PHP' },
  { icon: SiJavascript, title: 'JavaScript' },
  { icon: SiReact, title: 'React' },
  { icon: SiXml, title: 'XML' },
  { icon: SiGithub, title: 'GitHub' },
  { icon: SiGitlab, title: 'GitLab' },
  { icon: SiJira, title: 'JIRA' },
  { icon: SiFigma, title: 'Figma' },
]

export default function Technologies() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <span className="eyebrow">TECNOLOGÍAS</span>
          <h2 className="section-title mt-4">
            Frameworks, herramientas y tecnologías que conozco
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {technologies.map((tech, i) => (
            <Reveal as="div" key={tech.title} delay={(i % 4) * 90}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <tech.icon size={22} />
                </span>
                <span className="text-sm font-semibold text-ink-900">{tech.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
