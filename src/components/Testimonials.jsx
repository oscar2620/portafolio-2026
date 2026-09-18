const testimonials = [
  {
    name: 'Paula Gómez',
    role: 'Product Designer · Studio Norte',
    quote:
      'Oscar traduce mockups en código con mucha precisión. Su trabajo es consistente, bien documentado y siempre pensado para escalar.',
    avatar: 'https://picsum.photos/seed/paula-gomez/120/120',
  },
  {
    name: 'Mateo Ramírez',
    role: 'Engineering Lead · Atlas Labs',
    quote:
      'Me encanta cómo estructura componentes y sistemas visuales. Su trabajo es claro, coherente y fácil de mantener.',
    avatar: 'https://picsum.photos/seed/mateo-ramirez/120/120',
  },
  {
    name: 'Camila Soto',
    role: 'Product Manager · Bloom Health',
    quote:
      'Entrega resultados visuales muy sólidos y siempre está dispuesto a mejorar la accesibilidad y el rendimiento del producto.',
    avatar: 'https://picsum.photos/seed/camila-soto/120/120',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <span className="eyebrow">TESTIMONIOS</span>
        <h2 className="section-title mt-4">Lo que dicen clientes y colegas</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="card flex flex-col">
              <blockquote className="flex-1 text-sm text-ink-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
                  <p className="text-xs text-ink-500">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
