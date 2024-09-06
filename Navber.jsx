// import React from 'react'
import './App.css'
import ColorChanger from './ColorChanger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navber() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-lg-dark bg-dark">
        <a className="navbar-brand" href="#"><i>&nbsp;CGPA CALCULATER</i></a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-contact">
          <a className="contact-link" href="yashprajapati559@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/yashprajapati559" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="contact-link" href="https://github.com/yashprajapati559" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="color-changer-container">
          <ColorChanger />
        </div>
      </nav>
    </>
  )
}
