import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import NodoLogo from './NodoLogo.jsx'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#empresa', label: 'Aventi Solutions' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 animate-fade-in-down border-b border-slate-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <NodoLogo className="h-7 w-7" />
          <span className="text-sm font-semibold text-ink-900">Oscar Restrepo</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-ink-700 transition hover:text-brand-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-ink-800 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
