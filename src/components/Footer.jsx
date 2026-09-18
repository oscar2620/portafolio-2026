import NodoLogo from './NodoLogo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-ink-400 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <NodoLogo className="h-6 w-6" />
          <span className="font-semibold text-white">Oscar Restrepo</span>
        </div>
        <p>© 2026 Oscar Restrepo. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
