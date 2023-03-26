import React from 'react'

import { Link } from 'react-router-dom'

import { Globalcontext } from '../context/context';
import { useContext } from 'react';


const Navbt = (props) => {

    const { menu, setMenu } = useContext(Globalcontext);

    return (
        <>
            <Link className='link' to={props.url}>
                <span onClick={() => {
                    setMenu(!menu)
                    window.scrollTo(0 ,0)
                }} className="navbt">{`.${props.value}()`}</span>
            </Link>
        </>
    )
}

export default Navbt