import React from 'react'
import { Globalcontext } from '../../context/context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Opentag from '../Opentag'
import Closetag from '../Closetag'
import Comment from '../Comment';
import Smallbar from '../Smallbar';

import '../../style/introsection.css'

const Introsection = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <>
            <section className={`main introsec ${theme}`}>
                <div className="container-c inner-introsec">
                    <div className="code-bx-1" data-aos="fade-right" data-aos-delay="300" >
                        <Opentag value="Introduction" size="t32" />
                    </div>
                    <div className="code-bx-2" data-aos="fade-right"  data-aos-delay="600" >
                        <div className='name-bx-code'>
                            <Opentag value="Name" size="t24" />
                            <span className='tag-name'> Harsh khanagwal </span>
                            <Closetag value="Name" size="t24" />
                        </div>
                        <Comment value="self-taught Developer" />
                    </div>
                    <div className="code-bx-2" data-aos="fade-right" data-aos-delay="600" >
                        <Opentag value="Summary" size="t24" />
                    </div>
                    <div className="code-bx-3">
                        <span className="code-txt" data-aos="fade-right" data-aos-delay="800" >
                            A passionate programmer and BCA student based in New Delhi, India. I love nothing more than diving into code and exploring the possibilities of new technologies. <br /><br /> for me, programming isn't just a job, it's a passion. I'm always seeking out new challenges and opportunities to learn and grow. I'm committed to continuous learning, staying up-to-date with industry trends and technologies, and exploring new approaches to problem-solving.
                        </span>
                    </div>
                    <div className="code-bx-2" data-aos="fade-right" data-aos-delay="600" >
                        <Closetag value="Summary" size="t24" />
                    </div>
                    <div className="code-bx-1" data-aos="fade-right" data-aos-delay="300" >
                        <Closetag value="Introduction" size="t32" />
                    </div>
                    <div className="more" >
                        <div className="s-bar" data-aos="fade-down" data-aos-duration="3500" data-aos-delay="700">

                            <Smallbar />
                        </div>

                        <div className="know-more" data-aos="fade-right" data-aos-delay="600">
                            <span className='comment-2'> {'//'} Want to know more about me ?</span>
                            <div className="blog-bt-ar">
                                <div className="row">

                                    <span className='readblog'>visit my blog</span>
                                   <Link to={"/about/#"} className="link"><button onClick={() => window.scrollTo(0 ,0)} className='readblog-bt'>click here</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="readmore" data-aos="fade-right" data-aos-duration="4500">
                        <Link to={"/about"} className="link"><button onClick={() => window.scrollTo(0 ,0)} className='readblog-bt'>Read more</button></Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Introsection