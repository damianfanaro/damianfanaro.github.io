import { Link } from 'react-scroll'
import LanguageSwitch from './LanguageSwitch'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="logo.svg" alt="Logo" style={{ width: '35%' }} />
        </a>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="inicio" spy={true} smooth={true} offset={-70} duration={500} href="#">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="blog" spy={true} smooth={true} offset={-70} duration={500} href="#">
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contacto" spy={true} smooth={true} offset={-70} duration={500} href="#">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse navbar-toggler justify-content-right">
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
