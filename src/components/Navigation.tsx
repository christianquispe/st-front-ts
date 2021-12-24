import Link from "next/link"

interface NavLinkProps {
  href?: string
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => (
  <li className="navigation-item">
    {href ? (
      <Link href={href}>
        <a className="navigation-link">{children}</a>
      </Link>
    ) : (
      children
    )}
  </li>
)

const Navigation: React.FC = () => {
  return (
    <div className="container">
      <nav className="navigation">
        <h1 className="title">El mercado</h1>
        <ul className="navigation-list">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/products">Catálogo</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
          <NavLink href="/about-us">Sobre nosotros</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
