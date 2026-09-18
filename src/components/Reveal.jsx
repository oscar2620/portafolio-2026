import useInView from '../hooks/useInView.js'

const hidden = {
  up: 'opacity-0 translate-y-6',
  left: 'opacity-0 -translate-x-6',
  right: 'opacity-0 translate-x-6',
}

export default function Reveal({ children, as: Tag = 'div', direction = 'up', delay = 0, className = '' }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-x-0 translate-y-0' : hidden[direction]} ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
