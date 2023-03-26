import React from 'react'
import { Globalcontext } from '../../context/context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../style/getintouch.css'

const Getintouchsection = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <>
            <section className={`Getintouch main ${theme}`}>

                <span className="getintouch-heading">
                    Get In Touch
                </span>

                <div className="colorbar">
                </div>

                <span className="txt-cnt">
                    Ready to take your project or website to the next level?
                    Let's work together and create something amazing!
                </span>

                <Link to={'/contact'} className="link">
                    <button onClick={() => window.scrollTo(0 ,0)} className='send-message'>
                        Send Message
                    </button>
                </Link>
            </section>
        </>
    )
}

export default Getintouchsection