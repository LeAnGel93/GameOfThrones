import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <div>
    <Link to='/Characters'>CHARACTERS</Link>
    <Link to='/Houses'>HOUSES</Link>
    <Link to='/Cronology'>CRONOLOGY</Link>
    </div>
    </>
  )
}

export default Footer