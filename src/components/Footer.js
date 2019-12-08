import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <FontAwesomeIcon icon={faAppleAlt} />
      </div>
    </footer>
  )
}

export default Footer
