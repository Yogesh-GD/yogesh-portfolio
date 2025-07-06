'use client'
import React from 'react'
import SkillBar from './SkillBar'
import { motion } from 'framer-motion'
import Image from 'next/image'


const SkillInfo = [
  {
    skill: "React ",
    per: "70%"
  },
  {
    skill: "node ",
    per: "50%"
  },
  {
    skill: " express ",
    per: "50%"
  },
  {
    skill: "SQL",
    per: "65%"
  },
  {
    skill: "Mongo DB ",
    per: "60%"
  },
  {
    skill: "HTML/CSS/JAVA SCRIPT",
    per: "75%"
  },
  {
    skill: "JQUERY",
    per: "50%"
  },
  {
    skill: "BOOTSTRAP",
    per: "70%"
  },
  {
    skill: "Version Control (Git)",
    per: "60%"
  },
  {
    skill: "RESTFUL APIs",
    per: "55%"
  },
  {
    skill: "python, numpy, pandas ",
    per: "40%"
  },

]

function SkillComp() {


  return (
    <div >
      <div className=' flex flex-col sm:flex-row flex-wrap md:flex-nowrap my-20 relative'>
        <div className=' w-full flex justify-center p-5 '>
          <motion.div className='relative w-full aspect-square sm:w-[400px] sm:h-[400px] grid place-items-center rounded-full  p-5 border-[#D29EFD] border-2 '
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}

          >
            <div className=' relative rounded-full z-10'>
              <Image className=' rounded-full' src="/pf3.jpg" alt="" width={400}
                height={400} />
            </div>
            <div className='z-0 absolute w-[150px] h-[150px] bg-[white] rounded-full grid place-items-center top-[0] right-[0]'> <div className=' w-[100px] h-[100px] bg-[#1D242D] rounded-full'></div> </div>
            <div className=' z-20 absolute w-[100px] h-[100px] bg-[white] rounded-full grid place-items-center bottom-0 left-[0]'> <div className=' w-[80px] h-[80px] bg-[#1D242D] rounded-full'></div> </div>
          </motion.div>
        </div>

        <div className=' w-full px-5'>
          <motion.h2 className='text-[#fff] text-4xl'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}

          >Skills <span className=' inline-block h-[1px] w-full bg-[#D29EFD]'></span></motion.h2>

          <motion.div className=' bg-[#D29EFD] p-5 text-[#1D242C] rounded-3xl my-5 text-sm'
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.p className=' text-base '
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}

            > My journey in technology has equipped me with a solid foundation in various programming languages and frameworks, including HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express, MongoDB, MySQL, and Python. I have hands-on experience with libraries like NumPy and Pandas, allowing me to work efficiently with data.I pride myself on my strong communication skills, which help me collaborate effectively within teams and convey technical concepts to non-technical stakeholders.

              I am eager to apply my knowledge in real-world projects and continuously learn and grow in this ever-evolving field.</motion.p>
          </motion.div>

          <div>
            {SkillInfo.map((info, index) => {
              return (
                <SkillBar width={info.per} skill={info.skill} key={index} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillComp