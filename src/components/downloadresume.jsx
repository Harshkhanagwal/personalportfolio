import React from 'react'
import { Globalcontext } from '../context/context';
import { useContext } from 'react';

const Downloadresume = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <>
            <div className={`Downloadresume main ${theme}`}>
                <div className="container-c dr-inner">
                    <p className='dr-txt'>For more details download my : </p> <button className='dr-bt'>Resume</button>
                </div>
            </div>
        </>
    )
}

export default Downloadresume