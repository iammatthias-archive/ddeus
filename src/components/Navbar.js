import React from 'react'
import Link from 'gatsby-link'

import instagram from '../img/insta-icon.svg'
import logo from '../img/tad_logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Thaddeus Jordan" style={{ width: '28px'}} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.instagram.com/tkjordan73/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={instagram} alt="Instagram" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
