import React from 'react'
import { Globalcontext } from '../../context/context';
import { useContext } from 'react';

import mainskills from '../../utils/mainskills'
import familiarskills from '../../utils/familiarskills'
import tools from '../../utils/tools'

import '../../style/skillsection.css'

import Skillbx from '../skillbx';
import Arraytxt from '../Arraytxt';
import Endcurrly from '../endcurrly'
import Opencurrly from '../Opencurrly'

const Skillsection = () => {
  const { theme } = useContext(Globalcontext);

  return (
    <>
      <section className={`main skillsection ${theme}`}>
        {/* <Skillbx value={'hello'}/> */}
        <div className="container-c inner-skillsec">
          <div className="skill-head">
            <span className="skillheading g-txt">
              {'.skills() {'}
            </span>
          </div>
          <div className="code-bx-2 skillcodebx">
            <div className="arrycon" data-aos="zoom-in-up">
              <div className="skillhead">
                <Arraytxt value="main" />
                <Opencurrly />
              </div>
              <div className='skills'>

              {
                mainskills.map((s) => {
                  return <Skillbx value={s} />
                })
              }
              </div>
              <Endcurrly />
            </div>

            <div className="arrycon" data-aos="zoom-in-up" data-aos-delay="500">
              <div className="skillhead">
                <Arraytxt value="Familiar" />
                <Opencurrly />
              </div>

              <div className='skills'>

                {
                  familiarskills.map((s) => {
                    return <Skillbx value={s} />
                  })
                }
              </div>
              <Endcurrly />
            </div>

            <div className="arrycon" data-aos="zoom-in-up" data-aos-delay="800">
              <div className="skillhead">
                <Arraytxt value="Tools" />
                <Opencurrly />
              </div>

              <div className='skills'>

                {
                  tools.map((s) => {
                    return <Skillbx value={s} />
                  })
                }
              </div>
              <Endcurrly />
            </div>
          </div>
          <div className="skill-head">
            <span className="skillheading g-txt">
              {'}'}
            </span>
          </div>
        </div>

      </section>
    </>
  )
}

export default Skillsection