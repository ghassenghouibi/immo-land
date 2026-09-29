import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import logoLight from '../assets/logo-light.svg'
import logoCompact from '../assets/logo-compact.svg'
import logoCompactLight from '../assets/logo-compact-light.svg'

/**
 * Logo officiel Immoland (SVG).
 * `light` = variante pour fonds sombres (signature en blanc) · `compact` = sans la signature (en-tête).
 */
export default function Logo({ height = 60, light = false, compact = false }: { height?: number; light?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className="logo" aria-label="Immoland — accueil" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img src={compact ? (light ? logoCompactLight : logoCompact) : light ? logoLight : logo} alt="Immoland — Conseils & immobilier" height={height} style={{ height, width: 'auto', maxWidth: 'none', display: 'block' }} />
    </Link>
  )
}
