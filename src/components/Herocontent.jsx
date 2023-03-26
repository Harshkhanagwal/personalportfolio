import React from 'react'
import { Globalcontext } from '../context/context';
import { useContext } from 'react';


import { GoMarkGithub } from 'react-icons/go'
import { GrInstagram, GrLinkedinOption } from 'react-icons/gr'

import Typinganimation from './Typinganimation'
const Herocontent = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <>
            <div className="herocontent hero-bx-size">
                <div className="hero-left">
                    <span className="start-line" data-aos="fade-right" data-aos-duration="1500">
                        Hello, My name is
                    </span>
                    <span className="hero-name g-txt" data-aos="fade-right" data-aos-duration="1500" >Harsh khanagwal</span>
                    <p data-aos="fade-right" data-aos-duration="1500">
                        <span className={"hero-tagline " + theme} ><Typinganimation /></span>
                    </p>
                    {/* <Typinganimation/> */}
                    <div className="icon-bx" data-aos="fade-right" data-aos-duration="1500">
                        <a href="https://github.com/harshkhanagwal" rel="noreferrer" target={"_blank"}><GoMarkGithub className='f-icon' /></a>
                        <a href="https://www.linkedin.com/in/harshkhanagwal/" rel="noreferrer" target={"_blank"}><GrLinkedinOption className='f-icon' /></a>
                        <a href="https://www.instagram.com/harsh.khanagwal" rel="noreferrer" target={"_blank"}><GrInstagram className='f-icon' /></a>
                    </div>
                    <div className="myresume" data-aos="fade-right" data-aos-duration="2000">
                        <span className={'dwn ' + theme}>Donwload my : </span>

                        <a href="resume.pdf" download><button className='resume-bt'>Resume</button></a>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-image" data-aos="zoom-in-left" data-aos-duration="2000">
                        <img src="/images/heroimage.png" className='hero-img' alt="Harsh khanagwal" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herocontent