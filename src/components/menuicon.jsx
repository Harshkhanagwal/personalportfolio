import React from 'react'
import { Globalcontext } from '../context/context';
import { useContext } from 'react';

const Menuicon = () => {

    const { menu, setMenu } = useContext(Globalcontext);
    return (
        <div className="menu-icon" onClick={() => setMenu(!menu)}>
            <div className={menu ? `menu-iconbar bar1` : `menu-iconbar r1`}></div>
            <div className={menu ? `menu-iconbar bar2` : `menu-iconbar bar-hide`}></div>
            <div className={menu ? `menu-iconbar bar3` : `menu-iconbar r2`}></div>
        </div>
    )
}

export default Menuicon