import React from 'react'
/*importation de fontawesome*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light navbar-dark i" id="accueil">
        <a className="navbar-brand" href="#">Chidiac</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} />

        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">

              <a className="nav-link" href="#top"> Accueil</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#wrapper-moi">Moi</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#competences">Compétences</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#5">Tutoriels</a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link" href="www.google.com">
CV</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#5">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default  Navbar