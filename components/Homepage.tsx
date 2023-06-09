import { motion } from 'framer-motion'
import React from 'react'
import Button from './Button'

type props = {
  
}
 
function Homepage  ( {}:props) {
 
   


    


  return (
    <section  className='grid h-screen place-items-center' >
     
        {/* Used frame motion for the the transition */}
        <  motion.div className='' 
     initial={{
        x:-500,
       opacity:0,
        scale:0.5 
  
      }}
  
      animate={{
        x: - 0,
        opacity:1,
        scale:1
      }}
  
      transition={{
        duration:1.5,
      }} >

            <h1 className="space-y-3 text-4xl font-semibold tracking-wide lg:text-6xl xl:text-7xl" >
                <span className=" bg-white  xl:text-[60px] p-5  bg-clip-text text-transparent font-TiltPrism grid  place-items-center " > Welcome To</span>
                <span className=" font-bold  text-white font-serif p-5 " > Nemon Guest-inn </span>
                
                
            </h1>
            <div className="grid p-5 place-items-center" >
            <Button  title='know more' /> 
               
            </div>
        </motion.div>

     
     
      
   
       
      
    </section>
  )
}

export default Homepage
 