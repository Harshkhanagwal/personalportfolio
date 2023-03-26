import React from 'react'
import { Globalcontext } from '../context/context';
import { useContext } from 'react';

import Experiencesection from '../components/sections/Experiencesection';
import Skillsection from '../components/sections/Skillsection';
import Downloadresume from '../components/downloadresume';

import '../style/about.css'
import '../style/getintouch.css'
import { Link } from 'react-router-dom';


const About = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <section className={`about main ${theme}`} id="">
            <div className="container-c about-in">
                <div className="about-f a-nam" >
                    {`.about(`}{`"`}<span className="g-txt" data-aos="fade-down" data-aos-delay="800">Harsh khanagwal</span>{`"`}{`) {`}
                </div>
                <div className="about-f a-nam-m"  >
                    {`.about(`}{`"`}<span className="g-txt" data-aos="fade-down" data-aos-delay="800">Me</span>{`"`}{`) {`}
                </div>
                <div className="code-bx-2 about-txt" data-aos="fade-right" data-aos-delay="1200">
                    <p>
                        Hello! I'm <span className='g-txt'> Harsh Khanagwal</span>, A passionate programmer and <span className='g-txt'>BCA student</span> based in New Delhi, India. I love nothing more than diving into code and exploring the possibilities of new technologies.

                        <br />
                        <br />

                        As a <span className='g-txt'>Freelance Web Developer</span> with a year of experience, I have honed my skills in frontend web development, specializing in React JS. I enjoy creating modern designs that are not only visually appealing but also user-friendly. I believe that the user experience is just as important as the code itself and strive to make my work accessible to all.

                        <br />
                        <br />

                        But for me, programming isn't just a job{` - `}it's a passion. I'm always seeking out new challenges and opportunities to learn and grow. I'm committed to continuous learning, staying up-to-date with industry trends and technologies, and exploring new approaches to problem-solving.

                        <br />
                        <br />

                        When I'm taking a break from programming, you can often find me listening to music or playing games. Even though I'm still in front of the computer, these activities help me to relax and recharge so that I can approach my work with renewed focus and energy. In addition to music and gaming, I also enjoy reading books and cycling with my friends. These hobbies allow me to maintain a healthy work-life balance and keep me motivated to pursue my passion for programming.

                        <br />
                        <br />

                        I believe that learning is not just about acquiring knowledge but also about developing the right mindset and approach to problem-solving. If you're interested in working with me or just want to connect, please feel free to reach out. I'm always excited to collaborate on new projects and explore the possibilities of programming.
                    </p>
                </div>
                <div className="about-f">
                    {`}`}
                </div>
            </div>
            <Experiencesection />
            <Skillsection />
            <Downloadresume />
            <div className={`Getintouch-about main ${theme}`}>

                <span className="getintouch-heading">
                    Get In Touch
                </span>

                <Link to={'/contact'}>
                    <button onClick={()=>window.scrollTo(0 ,0)}className='send-message'>
                        Send Message
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default About