import React from 'react'

import { MdOutlineDarkMode } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'

import { Globalcontext } from '../context/context';
import { useContext } from 'react';

const Themebutton = () => {

    const { theme, setTheme } = useContext(Globalcontext);

    return (
        <button className='themebt' onClick={() => {theme === 'dark'? setTheme('light') : setTheme('dark')}}>
            {theme === 'dark' ?  <FiSun className='icon' /> : <MdOutlineDarkMode className='icon' />}
        </button>
    )
}

export default Themebutton