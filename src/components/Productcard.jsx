import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
// import { FaExternalLinkAlt } from 'react-icons/fa'

const Productcard = (props) => {
    return (
        <div className={`productcard ${props.theme}`}>
            <div className="imgarea">
                <img src={props.src} className='project-img' width={300} alt="Project sample" />
            </div>
            <div className="projectdetails">
                <div className="detail-head">
                    <a href={props.gitlink} rel="noreferrer"  target={"_blank"} className="project-link"><FiGithub className='icon' /></a>
                    <a href={props.demolink} rel="noreferrer"  target={"_blank"} className="project-link"><FiExternalLink className='icon' /></a>
                </div>
                <div className="project-summary">
                    <span className="project-name">
                        {props.name}
                    </span>
                    <br />
                    <p className="detail-txt">
                        {props.dis}
                    </p>
                    <p  className="detail-txt-2"><b>Tech stack : </b>{props.tech}</p>
                </div>
            </div>
        </div >
    )
}

export default Productcard