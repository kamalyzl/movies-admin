import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/Header.css'
const Header = () => {
  return (
    <header className='header'>
      <div />
      <span className='icon'>
        <FontAwesomeIcon icon={faUser} />
      </span>
    </header>
  )
}

export default Header
