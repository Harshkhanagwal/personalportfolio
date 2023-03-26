import React from 'react'

import { Globalcontext } from '../context/context';
import { useContext } from 'react';

import Contactsection from '../components/sections/Contactsection';

import '../style/contact.css'
const Contact = () => {

  const { theme } = useContext(Globalcontext);

  return (
    <div className={`contactpage main ${theme}`}>
      <Contactsection theme={theme}/>
    </div>
  )
}

export default Contact