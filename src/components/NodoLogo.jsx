// Marca "Nodo": dos círculos entrelazados, acento cyan.
export default function NodoLogo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="#39AAAA" strokeWidth="2.5" />
      <circle cx="20" cy="20" r="8" stroke="#0f172a" strokeWidth="2.5" />
    </svg>
  )
}
