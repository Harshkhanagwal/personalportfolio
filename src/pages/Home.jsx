import React from 'react'
import Herosection from '../components/sections/Herosection'
import Quotesection from '../components/sections/Quotesection'
import Introsection from '../components/sections/Introsection'
import Skillsection from '../components/sections/Skillsection'
import Animatedcolorbar from '../components/animatedcolorbar'
import Experiencesection from '../components/sections/Experiencesection'
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/rightbar';
import Getintouchsection from '../components/sections/Getintouchsection'



const Home = () => {
  return (
    <>
      <Leftbar />
      <Herosection />
      <Rightbar />

      <Quotesection />
      <Introsection />
      <Skillsection />
      <Animatedcolorbar />
      <Experiencesection />
      <Getintouchsection />
    </>
  )
}

export default Home