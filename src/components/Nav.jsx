import React from 'react'


import Navbt from './navbt'

const Nav = () => {



  return (
    <nav>
        <Navbt value="Home" url="/"/>
        <Navbt value="About" url="/about"/>
        <Navbt value="Projects" url="/projects"/>
        <Navbt value="Contact" url="/contact"/>
    </nav>
  )
}

export default Nav