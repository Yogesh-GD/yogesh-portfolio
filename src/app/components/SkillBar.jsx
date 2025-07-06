import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'

function SkillBar(props) {


  return (
    <div className='my-3'>
      <h2 className=' text-[#fff]'>{props.skill}</h2>
      <div className=' flex ' >
      <div className=' bg-[#F9F7BF] h-7 w-full  sm:w-[300px]  rounded-2xl '>
      <motion.span 
            whileInView={{width:props.width}}
            transition={{duration:2,delay:0,type:'spring'}}
            viewport={{ once: true }}
            className={`  inline-block h-full rounded-2xl  bg-[#D29EFD]`}></motion.span>
    </div>
    <span className='text-[#fff]'>{props.width}</span>
    </div>
    </div>
  )

}

export default SkillBar