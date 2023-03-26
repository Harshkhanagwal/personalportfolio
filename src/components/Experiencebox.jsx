import React from 'react'
import Smallbargray from './smallbargray'

import { Globalcontext } from '../context/context';
import { useContext } from 'react';

const Experiencebox = (props) => {

    const { theme } = useContext(Globalcontext);

    return (
        <div className={`code-bx-2 ex-bx-out ${theme}`}>
            <div className="exp-bararea" data-aos="fade-down">
                <Smallbargray />
            </div>
            <div className={`exp-bx ${theme}`} data-aos="fade-right" >
                <div className={`exp-bx-content ${theme}`}>
                    <div className="exp-img">
                        <img src={props.logo} alt="company logo" />
                    </div>
                    <div className="exp-details">
                        <div className="upbx">

                        <span className={`companyName ${theme}`}>
                            {props.company_name}
                        </span>
                        <span className="date">
                            {`${props.d_start} to ${props.d_end}`}
                        </span>
                        </div>
                        <span className="post">
                            {`${props.post}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiencebox