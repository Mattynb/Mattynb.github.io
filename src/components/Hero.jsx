import React from 'react'
import {styles} from '../styles'

import { PortraitCanvas } from './canvas';
import { portrait_png } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col">
     
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap=5 `}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-secondary mt-5 mr-5'/>
          <div className='bg-gradient-to-t from-white-100 to-secondary mr-5 w-1 h-60 '/>
        </div>
          
        <div>
          <h1 className={`${styles.heroHeadText} text-primary`}>
            Hi, I'm <span className="text-secondary">Matheus</span>
          </h1>
          <p className={`${styles.heroSubText} flex text-white`}>Welcome to my portfolio!</p>
        </div>
      </div>
  
      <div
        className='xl:flex-1 xl:h-auto md:h-bottom-10 h-auto absolute inset-0 top-[358px] hidden sm:block'
      >
        <PortraitCanvas/>
      </div>
      <div className='sm:hidden absolute inset-x-0 bottom-0 flex justify-center size-1/2 '>
          <img src={portrait_png} alt='portrait'/>
      </div> 
    </section>
  )
}

export default Hero