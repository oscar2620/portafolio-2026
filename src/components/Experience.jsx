import Reveal from './Reveal.jsx'

const experience = [
  {
    period: '2021 — Actualidad',
    role: 'Líder Frontend · Aventi Solutions',
    desc: 'Desarrollo y personalización de temas en Magento, capacitación a clientes sobre el uso de sus tiendas y construcción de interfaces intuitivas y atractivas con PHP, XML, LESS y JavaScript.',
    tags: ['Magento', 'PHP', 'LESS'],
    current: true,
  },
  {
    period: '2020 — 2021',
    role: 'Desarrollo Web Full Stack · Acámica',
    desc: 'Formación intensiva en desarrollo web full stack. Construí "Gifos", una aplicación web para compartir GIFs animados integrando la API de Giphy con funciones asíncronas y diseño adaptado a múltiples dispositivos.',
    tags: ['JavaScript', 'API de Giphy', 'Responsive'],
  },
]

export default function Experience() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <span className="eyebrow">EXPERIENCIA</span>
          <h2 className="section-title mt-4">Un poco de mi trayectoria</h2>
        </Reveal>

        <ol className="mt-12 space-y-10 border-l border-slate-200 pl-8">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.role} direction="left" delay={i * 120} className="relative">
              <span className="absolute -left-[2.31rem] top-1 flex h-3 w-3">
                {item.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                )}
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-brand-500 bg-white" />
              </span>
              <span className="text-sm font-semibold text-brand-600">{item.period}</span>
              <h3 className="mt-1 text-lg font-semibold text-ink-900">{item.role}</h3>
              <p className="mt-2 max-w-2xl text-sm text-ink-500">{item.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 shadow-card"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
