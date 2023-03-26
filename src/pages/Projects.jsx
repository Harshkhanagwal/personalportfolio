import React from 'react'
import { Globalcontext } from '../context/context';
import { useContext } from 'react';

import Productcard from '../components/Productcard';
import Opentag from '../components/Opentag'
import Closetag from '../components/Closetag'
import projects from '../utils/projects';

import '../style/products.css'

const Projects = () => {

  const { theme } = useContext(Globalcontext);

  return (
    <>
      <div className={`projects  ${theme}`}>
        <div className="container-c projectsec">
          <span>
            <Opentag value="Projects" size="t32" />
          </span>

          <div className="code-bx-2 product-gallery">
            {
              projects.map((p) => {
                return (
                  <Productcard theme={theme} gitlink={p.github} demolink={p.link} name={p.name} src={p.img} dis={p.dis} tech={p.technologies}/>
                )
              })
            }
          </div>
          <span>
            <Closetag value="Projects" size="t32" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Projects