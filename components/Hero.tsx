import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from "@/lib/utils";
import {TextGenerateEffect} from '@/components/ui/text-generate-effect'
import Borderbutton from './ui/borderbutton';


const Hero = () => {
  return (
    <><div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
    </div>
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )} />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"/>
        <div className='flex justify-center'>
          <div className='max-w-[89vw]'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 w-full
            '>
              
              <TextGenerateEffect
                  className='text-center text-[40px] md:text-5xl lg:text-6xl w-full'
                  words="tranform idea into seamless Experiences"
              />
            </h2>
            <p className='text-center md:tracking-wider md-4 md:text-lg lg:text-2xl'>
              hi i'm Great, a Website Developer.
            </p>
            <div className='flex justify-center mt-4'>
              <a href="#about">
              <Borderbutton 
               title="show my Work"
               />
              </a>
            </div>
          </div>
        </div>
      </div>
  </>

  )
}

export default Hero
