import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contacto" className="bg-ink-900">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Hablemos de tu próximo proyecto
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-400">
          Actualmente trabajo como Líder Frontend en Aventi Solutions. Si tienes un proyecto de
          frontend, Magento o e-commerce en mente, escríbeme y conversemos.
        </p>

        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:oscarrestrepo2002@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-brand-400 active:scale-[0.97]"
            >
              <HiOutlineMail className="mr-2" size={18} />
              oscarrestrepo2002@gmail.com
            </a>
            <a
              href="tel:+573165034633"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:border-brand-400 hover:text-brand-400 active:scale-[0.97]"
            >
              <HiOutlinePhone className="mr-2" size={18} />
              +57 316 503 4633
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/oscar-eduardo-restrepo-mejia/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-400 transition duration-200 hover:scale-110 hover:text-brand-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/oscar2620"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-400 transition duration-200 hover:scale-110 hover:text-brand-400"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
