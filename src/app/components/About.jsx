import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


function About() {
    return (
        <div>
            <div className='  flex flex-col sm:flex-row sm:my-20 relative '>
                <motion.div className=' w-full sm:w-1/2 px-5 '
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className=' relative w-full aspect-square sm:w-[400px] sm:h-[400px] grid place-items-center rounded-full  p-5 border-[#A5FDB3] border-2 '>
                        <div className=' relative rounded-full z-10'>
                            <Image className=' rounded-full' src="https://res.cloudinary.com/diwgq9ndi/image/upload/v1751778936/photo_2025-07-06_10-45-10_gnrpql.jpg" width={400}
                                height={400} alt="" />
                        </div>
                        <div className='z-0 absolute w-[150px] h-[150px] bg-gradient-to-bl from-[#A6FEB3] to-[#B6D2FC] rounded-full grid place-items-center top-[0] right-[0]'> <div className=' w-[100px] h-[100px] bg-[#1D242D] rounded-full'></div> </div>
                        <div className=' z-20 absolute w-[100px] h-[100px] bg-gradient-to-bl from-[#A6FEB3] to-[#B6D2FC] rounded-full grid place-items-center bottom-0 left-[0]'> <div className=' w-[80px] h-[80px] bg-[#1D242D] rounded-full'></div> </div>
                    </div>
                </motion.div>

                <div className=' w-full px-5 pt-8 '>
                    <motion.h2 className='text-[#fff] text-4xl'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >About ME <span className=' inline-block h-[1px] w-full bg-[#A5FDB3]'></span></motion.h2>

                    <div className=' border my-5 border-[#B5FFC7] p-5 rounded-3xl  text-[#9999A1] text-sm'

                    >
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                        > Hello! I&apos;m Yogesh Jangir, a passionate MERN stack developer.
                            I specialize in building responsive, scalable web applications using MongoDB, Express.js, React, and Node.js.
                            I thrive on creating clean, user-focused digital experiences and love solving complex problems with elegant code.</motion.p>
                    </div>

                    <div className=' border my-5 border-[#B5FFC7] p-5 rounded-3xl  text-[#9999A1] text-sm'
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                        >With strong skills in JavaScript, React, Node.js, and tools like Redux, Git, and REST APIs,
                            I&apos;m always eager to learn new technologies and collaborate on exciting projects.
                            Let&apos;s connect and build something amazing!</motion.p>
                    </div>



                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <motion.h3
                            className='text-[#fff] mt-10 text-2xl'
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            My Education
                            <span className='block h-[1px] w-full bg-[#A5FDB3] mt-2'></span>
                        </motion.h3>

                        <motion.div
                            className='flex gap-5 mt-5'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                        >
                            <div className='font-extrabold text-3xl text-[#B5FFC7]'>2022-25</div>
                            <div>
                                <h2 className='text-xl text-[#fff]'>Bachelor of Computer Applications (BCA)</h2>
                                <h3 className='text-[#9999A1] text-sm'>Shekhawati Group of Institutes, Sikar</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            className='flex gap-5 mt-5'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <div className='font-extrabold text-3xl text-[#B5FFC7]'>2021-22</div>
                            <div>
                                <h2 className='text-xl text-[#fff]'>Senior Secondary (12th) - Science</h2>
                                <h3 className='text-[#9999A1] text-sm'>Bright Sr. Sec. School, Sikar (87%)</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            className='flex gap-5 mt-5'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className='font-extrabold text-3xl text-[#B5FFC7]'>2019-20</div>
                            <div>
                                <h2 className='text-xl text-[#fff]'>Secondary (10th)</h2>
                                <h3 className='text-[#9999A1] text-sm'>Bright Sr. Sec. School, Sikar (95.17%)</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About