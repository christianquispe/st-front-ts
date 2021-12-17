const NavLink: React.FC = ({ children }) => (
  <li className="navigation-item">
    <a href="navigation-link" className="navigation-link">
      {children}
    </a>
  </li>
);

const Navigation: React.FC = () => {
  return (
    <div className="container">
      <nav className="navigation">
        <h1 className="title">El mercado</h1>
        <ul className="navigation-list">
          <NavLink>Inicio</NavLink>
          <NavLink>Catálogo</NavLink>
          <NavLink>Contacto</NavLink>
          <NavLink>Sobre nosotros</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
