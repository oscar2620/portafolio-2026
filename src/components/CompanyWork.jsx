import { HiOutlineShoppingBag, HiOutlineTemplate, HiOutlineUserGroup } from 'react-icons/hi'
import Reveal from './Reveal.jsx'

const work = [
  {
    icon: HiOutlineShoppingBag,
    title: 'Temas Magento a medida',
    desc: 'Desarrollo y personalización de temas Magento para tiendas de clientes, ajustando estilos, componentes y funcionalidades a cada marca.',
    tags: ['Magento', 'PHP', 'LESS'],
  },
  {
    icon: HiOutlineTemplate,
    title: 'Interfaces para e-commerce',
    desc: 'Construcción de interfaces de usuario intuitivas y atractivas para plataformas de e-commerce, priorizando usabilidad y consistencia visual.',
    tags: ['JavaScript', 'CSS', 'XML'],
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Capacitación y soporte',
    desc: 'Capacitación a clientes sobre el uso eficaz de las funcionalidades y capacidades de Magento, acompañando la adopción de nuevas features.',
    tags: ['Magento', 'Soporte'],
  },
]

export default function CompanyWork() {
  return (
    <section id="empresa" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <span className="eyebrow">AVENTI SOLUTIONS</span>
          <h2 className="section-title mt-4">Parte de mi trabajo como Líder Frontend</h2>
          <p className="section-subtitle">
            Algunos de los proyectos son de clientes bajo confidencialidad, así que por ahora los
            describo por tipo de trabajo. Iré agregando nombres y capturas de páginas puntuales.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {work.map((item, i) => (
            <Reveal as="div" key={item.title} delay={i * 100}>
              <div className="card h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 shadow-card"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
