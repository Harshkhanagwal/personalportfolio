import React from 'react'
import { Globalcontext } from '../../context/context';
import { useContext } from 'react';

import '../../style/herosection.css'

import Herocontent from '../Herocontent';

const Herosection = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <>
            <section className={`main herosection ${theme}`}>
                <div className={`container herosec-inner ${theme}`}>
                    <div className="sidebar">
                    </div>
                    <div className="content-bx">

                        <Herocontent />
                    </div>
                    <div className="sidebar">
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection