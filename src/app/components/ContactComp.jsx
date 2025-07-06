import { ArrowForward, Call, Email, GitHub, LinkedIn, } from '@mui/icons-material'
import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'



function ContactComp() {
    return (
        <div>
            <div className=' flex flex-row  relative overflow-hidden  '>
            <motion.div className=' absolute w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] bg-gradient-to-br from-[#FFB5CC] to-[#B8D2F5] rounded-full grid place-items-center top-[-30px] right-[-30px] sm:top-[-50px] sm:right-[-50px]'
              initial={{ opacity: 0 ,x:100}}
                whileInView={{ opacity: 1, x:0}}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}

            
            > <div className=' w-[60px] h-[60px] sm:w-[140px] sm:h-[140px] bg-[#1D242D] rounded-full'></div> </motion.div>

            <motion.div className=' w-1/4 sm:h-screen bg-[#FFB5CC]'
              initial={{ opacity: 0,width:0 }}
                whileInView={{ opacity: 1,width:"25%" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}

            ></motion.div>
            <div className=' w-3/4'>
            
            <div className=' p-5 font-extrabold mt-10 '>
                <motion.h2 className=' text-7xl text-[#fff] '
                initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                
                >Thank <br /> You</motion.h2>

                <motion.p className='text-[#9999A1] text-base sm:text-sm'
                initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >Thank you for taking the time to visit my portfolio! I am confident that my skills in web development and data science make me a strong fit for your needs. With proficiency in technologies such as HTML, CSS, JavaScript, React, Node.js, and Python, along with a solid understanding of databases like MongoDB and MySQL, I am well-equipped to tackle the challenges you may have. I am eager to contribute my expertise and collaborate with your team. Please feel free to reach out—I am excited about the opportunity to discuss how I can add value to your projects!</motion.p>

                <div className=' border-2 inline-flex  border-[#FFB5CC] text-[#fff] my-5'> <h2 className=' px-2 py-1'>Contact Me</h2> <span className=' bg-[#FFB5CC] text-[#1D242D] grid place-items-center px-3 font-extrabold '> <ArrowForward /></span></div>

                <motion.div className=' text-[#fff] '
                 initial={{ opacity: 0,y:80 }}
                    whileInView={{ opacity: 1 ,y:0}}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div><a href="tel:+917357199177" target="_blank" rel="noopener noreferrer"><Call className='text-3xl mr-5' />+917357199177</a></div>
                    <div><a href="mailto:yogeshjangirroot@gmail.com" target="_blank" rel="noopener noreferrer"><Email className='text-3xl mr-5' />yogeshjangirroot</a></div>
                    <div><a href="http://" target="_blank" rel="noopener noreferrer"><LinkedIn className='text-3xl mr-5'/>LinkedIn</a></div>
                    <div><a href="http://" target="_blank" rel="noopener noreferrer"><GitHub className='text-3xl mr-5'/>GitHub</a></div>
                </motion.div>
            </div>

            </div>
        </div>

        <div>
            <ContactForm />
        </div>
        </div>
    )
}

export default ContactComp