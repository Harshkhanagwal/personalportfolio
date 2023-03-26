import React from 'react'

import { Globalcontext } from '../../context/context';
import { useContext } from 'react';

import Experiencebox from '../Experiencebox';
import '../../style/Experiencesection.css'

import experience from '../../utils/experience'

const Experiencesection = () => {

  const { theme } = useContext(Globalcontext);

  return (
    <>
      <section className={`main experiencesection ${theme}`}>
        <div className={`container-c experiencearea ${theme}`}>
          <div className="exp-sec-heading-ar">
            <span className='exp-sec-heading'>Experience</span>
          </div>
          {
            experience.map((exp) => {
              return <Experiencebox
                company_name={exp.company_name}
                post={exp.post}
                logo={exp.comapany_logo}
                d_start={exp.date_started}
                d_end={exp.date_end}
              />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Experiencesection