import React from 'react'
import { Globalcontext } from '../context/context';
import { useContext } from 'react';

import '../style/header.css'

import Logo from './Logo';
import Menuicon from './menuicon';
import Themebutton from './Themebutton';

const Header = () => {

    const {theme} = useContext(Globalcontext);
    return (
        <header className={`main header ${theme}`}>
            <div className="innerHeader ">
                <div className="logoarea">
                    <Logo/>
                </div>
                <div className="header-bt-area">
                    <Themebutton/>
                    <Menuicon/>
                </div>
            </div>
        </header>
    )
}

export default Header;