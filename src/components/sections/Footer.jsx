import React from 'react'
import { Globalcontext } from '../../context/context';
import { useContext } from 'react';

import '../../style/footer.css'

import { GoMarkGithub } from 'react-icons/go'
import { GrInstagram, GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <>
            <footer className={`main ${theme}`}>

                <div className={`container-c footer-in ${theme}`}>
                    <div className="left-f">
                        <span>Developed with 💞 by Harsh khanagwal</span>
                    </div>
                    <div className="right-f">
                    <a href="https://github.com/harshkhanagwal" rel="noreferrer"  target={"_blank"}><GoMarkGithub className='f-icon' /></a>
                    <a href="https://www.linkedin.com/in/harshkhanagwal/" rel="noreferrer"  target={"_blank"}><GrLinkedinOption className='f-icon' /></a>
                    <a href="https://www.instagram.com/harsh.khanagwal" rel="noreferrer"  target={"_blank"}><GrInstagram className='f-icon' /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer