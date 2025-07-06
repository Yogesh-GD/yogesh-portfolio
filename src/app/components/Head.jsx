import React from 'react'
import { ArrowForward, GitHub, LinkedIn, } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'

function Head() {

    const text = "I'm Yogesh  Jangir"
    const textVarient = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }


    const letterVarient = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <div className=' flex flex-col-reverse sm:flex-row w-full  h-auto sm:h-screen relative sm:overflow-hidden  '>
            <motion.div className=' absolute w-[200px] h-[200px] bg-gradient-to-bl from-[#D29EFD] to-[#F6F2BE] rounded-full grid place-items-center top-[-100px] left-[-100px]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}

            >
                <div className=' w-[140px] h-[140px] bg-[#1D242D] rounded-full'></div>
            </motion.div>

            <div className=' w-full mb-16 relative z-10 '>
                <div className=' py-10 sm:py-[200px] px-[30px]  md:px-40 lg:p '>
                    <motion.span className=' text-[#B08FCD] my-5 text-xl '
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hello Everyone.
                    </motion.span>
                    <motion.h1 className=' text-[#fff] text-6xl my-5 '
                        variants={textVarient}
                        initial='hidden'
                        animate='visible'>
                        {
                            text.split("").map((ltr, id) => {
                                return (
                                    <motion.span key={ltr + id} variants={letterVarient}>
                                        {ltr}
                                    </motion.span>
                                )
                            })
                        }
                    </motion.h1>

                    <motion.div className=' border-2 inline-flex   border-[#D29EFD] my-5'
                    initial={{ opacity: 0,x:-100 }}
                    whileInView={{ opacity: 1,x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    > 
                    <h2 className='text-[#fff] px-2 py-1'>MERN STACK DEVELOPOER</h2> 
                    <span className=' bg-[#D29EFD] text-[#1D242D] grid place-items-center px-3 font-extrabold  '> <ArrowForward /></span>
                    </motion.div>
<br />

                    <a className=' inline-block ' target='_blank' href="https://drive.google.com/file/d/1KpDP1IUIizrxa6rilmb3ScfjKkaFgVT9/view">
                    <motion.div className=' border-2 inline-flex   border-[#D29EFD] my-5'
                    initial={{ opacity: 0,x:-100 }}
                    whileInView={{ opacity: 1,x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    > 
                    <h2 className='text-[#fff] px-2 py-1'>RESUME</h2> 
                    <span className=' bg-[#D29EFD] text-[#1D242D] grid place-items-center px-3 font-extrabold  '> <ArrowForward /></span>
                    </motion.div>
                    </a>

                    <motion.div className=' my-5 flex gap-5 text-[#fff] '
                     initial={{ opacity: 0,x:-50 }}
                whileInView={{ opacity: 1 ,x:0}}
                transition={{ duration: 0.6 ,delay:0.5}}
                viewport={{ once: true }}

                    >
                        <a href=""><GitHub className='text-4xl' /></a>
                        <a href=""><LinkedIn className='text-4xl' /></a>
                    </motion.div>

                    <motion.p className=' text-white'
                     initial={{ opacity: 0,y:20 }}
                whileInView={{ opacity: 1,y:0 }}
                transition={{ duration: 0.5,delay:0.5 }}
                viewport={{ once: true }}

                    >
                        I’m a passionate MERN STACK DEVELOPOER  dedicated to building clean, user-focused digital experiences.
                        With a keen eye for detail and a love for solving problems, I craft solutions that are not only functional but also beautifully designed.
                        Let's bring your ideas to life together!
                    </motion.p>
                </div>
            </div>

            <AnimatePresence>
                <motion.div className='  relative z-10  mt-16 sm:pr-[40px] grid place-items-center *: '
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className=' w-full flex justify-center p-5 '>
                        <div className=' relative w-full aspect-square sm:w-[400px] sm:h-[400px] grid place-items-center rounded-full     '>
                            <div className=' relative rounded-full z-10'>
                                <img className=' rounded-full' src="https://res.cloudinary.com/diwgq9ndi/image/upload/v1751778938/photo_2025-07-06_10-45-07_yp5hnl.jpg" alt="" />
                            </div>
                            <motion.div className=' absolute z-20  md:w-[130px] md:h-[130px] w-[100px] h-[100px] bg-gradient-to-bl from-[#D29EFD] to-[#F6F2BE] rounded-full grid place-items-center bottom-0 left-[0] md:left-[-30px]'
                                initial={{ opacity: 0, }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                            > <div className=' md:w-[90px] md:h-[90px] w-[70px] h-[70px] bg-[#1D242D] rounded-full'></div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className=' sm:w-[235px] ld:w-[240px] h-screen bg-[#D29EFD] absolute top-0 right-0 z-0'>

            </div>

        </div>
    )
}

export default Head